import axios from "axios";
import React from 'react'

export default class JobAdvertismentService {
  
    getJobAdvertisement() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getall");
    }
   
    getAllByIsActiveAndCompanyName(companyName){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByIsActiveAndCompanyName?companyName="+companyName);
    }
    
    getAllByIsActiveAndEndDateDesc(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByIsActiveAndEndDateDesc");
    }

    getbyisactive(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getbyisactive");
    }
    
    closeJobAdvertisment(id){
        return axios.get(" http://localhost:8080/api/jobadvertisements/closeJobAdvertisment?id="+id)
    }
}

