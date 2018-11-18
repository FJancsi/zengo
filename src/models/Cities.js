import ZengoService from '@/services/ZengoService';

export default class Cities {
    constructor() {
        this.zengoService = new ZengoService();
    }

    getCitiesByStateId(stateId) {
        return this.zengoService.getCitiesByStateId(stateId)
            .then(data => data.data);
    }

    addCityToState(stateId, cityName) {
        return this.zengoService.addCityToState(stateId, cityName)
            .then(data => data.data);
    }

    removeCityById(cityId) {
        return this.zengoService.removeCityById(cityId)
            .then(data => data);
    }

    updateCity(cityName, cityId) {
        return this.zengoService.updateCity(cityName, cityId)
            .then(data => data);
    }
}