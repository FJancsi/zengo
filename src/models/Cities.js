import ZengoService from '@/services/ZengoService';

export default class Cities {
    constructor() {
        this.zengoService = new ZengoService();
    }

    getCitiesByStateId(stateId) {
        return this.zengoService.getCitiesByStateId(stateId)
            .then(data => data.data);
    }
}