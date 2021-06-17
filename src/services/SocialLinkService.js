import axios from "axios";

export default class SocialLinkService{
    getAll(){
        return axios.get("http://localhost:8080/api/sociallink/getall");
    }

    
    getallbycandidateid(id){
        return axios.get("http://localhost:8080/api/sociallink/getbycandidatesid?candidateId="+id);
    }
}