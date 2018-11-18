import Vue from 'vue';

export default class ZengoService {
    constructor() {
    }

    getAllStates() {
        return Vue.axios.get('/all_states')
            .then(response => response.data);
    }
}
