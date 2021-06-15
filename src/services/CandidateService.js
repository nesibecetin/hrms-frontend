import axios from "axios";

export default class CandidateService{
    getCandidate(){
        return axios.get("http://localhost:8080/api/candidates/getall");
    }
    
    getById(id){
        return axios.get("http://localhost:8080/api/candidates/getbyid?id="+id);
    }

    getbyidentitynumber(identityNumber){
        return axios.get(" http://localhost:8080/api/candidates/getbyidentitynumber?identityNumber="+identityNumber);
    }
    
    getresumebycandidateid(candidateId){
        return axios.get(" http://localhost:8080/api/candidates/getresumebycandidateid?id="+candidateId);
    }
}