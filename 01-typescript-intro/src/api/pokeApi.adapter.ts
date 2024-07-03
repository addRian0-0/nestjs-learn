import axios from "axios";

export interface HttpAdapter {

    get<T>(url: string) : Promise <T>;

}

export class PokeApiFetchAdapter implements HttpAdapter{

    async get<T>(url : string): Promise<T> {
        const res = await fetch(url);
        const data: T = await res.json();
        console.log("fetch");
        return data;
    }

}

export class PokeApiAdapter implements HttpAdapter{

    private readonly axios = axios;

    async get<T>(url: string){
        // peticion get
        const { data } = await this.axios.get<T>(url);
        console.log("axios");
        return data; 
    }

    async post(url: string, data: any){

    }
    async patch(url: string, data: any){
        1
    }
    async put(url: string, data: any){
        
    }
    async delete(url: string, data: any){
        
    }

}