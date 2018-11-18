import ZengoService from '@/services/ZengoService';

export default class States {
    constructor() {
        this.zengoService = new ZengoService();
    }

    getAllStates() {
        return this.zengoService.getAllStates()
            .then(data => data.data);
    }
}