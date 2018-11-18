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
}
