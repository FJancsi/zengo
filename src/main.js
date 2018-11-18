import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App';

axios.defaults.baseURL = 'https://probafeladat-api.zengo.eu/api';
axios.defaults.headers.common['Token'] = '1a12caad8000e2f9c27b3b85bc384ae3';
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});