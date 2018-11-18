<template>
    <div id="cities-view" v-if="cities.length > 0">
        <div>Megye: {{state.name}}</div>
        <div>Városok:</div>
        <div>
            <ul>
                <li v-for="city in cities" :key="city.id">{{city.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import CitiesModel from '@/models/Cities';

    export default {
        name: 'cities-view',
        props: ['state'],
        data() {
            return {
                cities: []
            }
        },
        watch: {
            state(newValue, oldValue) {
                if (newValue) {
                    const citiesModel = new CitiesModel();
                    citiesModel.getCitiesByStateId(this.state.id)
                        .then(cities => this.cities = cities)
                        .catch(error => console.log(error));
                }
            }
        },
    }
</script>

<style scoped>

</style>


