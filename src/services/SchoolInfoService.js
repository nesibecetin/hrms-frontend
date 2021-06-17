import axios from "axios";

export default class SchoolInfoService{
    getAll(){
        return axios.get("http://localhost:8080/api/schoolinfo/getall");
    }

    
    getallbycandidateid(id){
        return axios.get("http://localhost:8080/api/schoolinfo/getallbycandidateid?id="+id);
    }
}