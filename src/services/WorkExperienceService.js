import axios from "axios";

export default class WorkExperienceService{
    getAll(){
        return axios.get("http://localhost:8080/api/workexperience/getAll");
    }

    
    getallbycandidateid(id){
        return axios.get("http://localhost:8080/api/workexperience/getAllByCandidateId?id="+id);
    }
}