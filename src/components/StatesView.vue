<template>
    <div id='states-view'>
        <label for="states">Megyék:</label>
        <select v-model="selectedState" id="states">
            <option v-for="state in states" :value="state" :key="state.id">
                {{ state.name }}
            </option>
        </select>
        <cities-view :state="selectedState"></cities-view>
    </div>
</template>

<script>
    import States from '@/models/States';
    import CitiesView from '@/components/CitiesView'

    export default {
        name: 'states-view',
        data() {
            return {
                states: [],
                selectedState: {}
            }
        },
        mounted() {
            const statesModel = new States();
            statesModel.getAllStates()
                .then(states => this.states = states)
                .catch(error => console.log(error));
        },
        components: {
            CitiesView
        }
    }
</script>

<style scoped>

</style>


