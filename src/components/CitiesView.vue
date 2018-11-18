<template>
    <div id="cities-view" class="cities-container" v-show="cities.length > 0">
        <h2>Megye: {{state.name}}</h2>
        <h3>Városok:</h3>
        <div>
            <ul class="cities-list">
                <li v-for="(city, index) in cities" :key="index">
                    <input type="text" v-model="city.name" :class="{editable: city.active}" @click="toggle(index)">
                    <div class="editor-container" :class="{show: city.active}">
                        <button @click="removeCity(city.id)">töröl</button>
                        <button @click="updateCity(city.name, city.id)">módosít</button>
                        <button @click="toggle(index)">mégse</button>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <label for="new-city">Új város:</label>
            <input type="text" id="new-city" v-model="newCity"/>
            <button @click="addNewCity">felvesz</button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import CitiesModel from '@/models/Cities';
    const citiesModel = new CitiesModel();
    export default {
        name: 'cities-view',
        props: ['state'],
        data() {
            return {
                cities: [],
                newCity: ''
            }
        },
        watch: {
            state(newValue, oldValue) {
                if (newValue) {
                    this.listCities();
                }
            }
        },
        methods: {
            listCities() {
                citiesModel.getCitiesByStateId(this.state.id)
                        .then(cities => this.cities = cities)
                        .catch(error => console.log(error));
            },
            addNewCity() {
                citiesModel.addCityToState(this.state.id, this.newCity)
                    .then(city => {
                        this.listCities();
                        console.log(`New city has been added: ${city.name}`)
                    })
                    .catch(error => console.log(error));
            },
            removeCity(cityId) {
                citiesModel.removeCityById(cityId)
                    .then(response => {
                        this.listCities();
                        console.log(`City has been removed`)
                    })
                    .catch(error => console.log(error));
            },
            updateCity(cityName, cityId) {
                citiesModel.updateCity(cityName, cityId)
                    .then(city => {
                        this.listCities();
                        console.log(`City has been renamed: ${city.name}`)
                    })
                    .catch(error => console.log(error));
            },
            toggle(index) {
                this.cities[index].active ?
                    Vue.delete(this.cities[index], 'active') :
                    Vue.set(this.cities[index], 'active', true);
            }
        }
    }
</script>

<style src="@/assets/css/cities.css"></style>
