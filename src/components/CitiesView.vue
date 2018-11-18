<template>
    <div id="cities-view" v-if="cities.length > 0">
        <div>Megye: {{state.name}}</div>
        <div>Városok:</div>
        <div>
            <ul>
                <li v-for="city in cities" :key="city.id">
                    <input type="text" v-model="city.name" @click="toggle">
                    <div v-show="editable">
                        <button @click="removeCity(city.id)">töröl</button>
                        <button @click="updateCity(city.name, city.id)">módosít</button>
                        <button @click="toggle">mégse</button>
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
    import CitiesModel from '@/models/Cities';
    const citiesModel = new CitiesModel();
    export default {
        name: 'cities-view',
        props: ['state'],
        data() {
            return {
                cities: [],
                newCity: '',
                editable: false
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
            toggle() {
                this.editable = !this.editable;
            }
        }
    }
</script>

<style scoped>

</style>


