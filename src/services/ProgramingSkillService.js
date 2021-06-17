import axios from "axios";

export default class ProgramingSkillService{
    getAll(){
        return axios.get("http://localhost:8080/api/programingskill/getall");
    }

    
    getallbycandidateid(id){
        return axios.get("http://localhost:8080/api/programingskill/getallbycandidateid?id="+id);
    }
}