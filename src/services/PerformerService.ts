import axios from "axios";
import {Performer} from "../interfaces/performer";

class Service {

    async fetchingPerformers () : Promise<Performer[]> {
        const {data} = await axios.get<Performer[]>('https://619c0b4768ebaa001753c757.mockapi.io/performers');
        return data;
    }
}

export const PerformerService = new Service();