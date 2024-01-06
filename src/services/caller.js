import axios from "axios";

export class caller{
    static serverUrl = "https://jsonplaceholder.typicode.com/users"

    static getUsers(){
        return axios.get(this.serverUrl);
    }
}