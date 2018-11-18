<template>
    <div id='states-view'>
        <label for="states">Megyék:</label>
        <select v-model="selectedState" id="states">
            <option v-for="state in states" :value="state.name" :key="state.id">
                {{ state.name }}
            </option>
        </select>
        <span>Selected: {{ selectedState }}</span>
    </div>
</template>

<script>
    import States from '@/models/States';

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
        }
    }
</script>

<style scoped>

</style>


