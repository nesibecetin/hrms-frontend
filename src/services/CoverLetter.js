import axios from "axios";

export default class CoverLetter{
    getAll(){
        return axios.get("http://localhost:8080/api/coverletter/getall");
    }
   

    getAllByCandidateId(id){
        return axios.get("http://localhost:8080/api/coverletter/getallbycandidateid?id="+id);
    }
}