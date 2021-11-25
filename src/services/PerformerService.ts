import {Performer} from "../interfaces/performer";
import {$api} from "../http";

class Service {

    async fetchingPerformers () : Promise<Performer[]> {
        const {data} = await $api.get<Performer[]>('/performers');
        return data;
    }
}

export const PerformerService = new Service();