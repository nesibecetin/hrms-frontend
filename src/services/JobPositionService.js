import axios from "axios"

export default class JobPositionService{
    
    getAll(){
        return axios.get("http://localhost:8080/api/jobpositions/getall");
    }

    getbyname(name){
        return axios.get("http://localhost:8080/api/jobpositions/getbyname?name="+name);
    }
}