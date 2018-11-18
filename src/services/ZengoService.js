import Vue from 'vue';

export default class ZengoService {
    constructor() {
    }

    getAllStates() {
        return Vue.axios.get('/all_states')
            .then(response => response.data);
    }

    getCitiesByStateId(stateId) {
        return Vue.axios.post('/state_city', {
                'state_id': stateId
            })
            .then(response => response.data);
    }

    addCityToState(stateId, cityName) {
        return Vue.axios.put('/city', {
            'state_id': stateId,
            'name': cityName
        })
        .then(response => response.data);
    }
}
