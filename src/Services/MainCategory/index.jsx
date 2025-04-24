import axios from "axios"
import axiosInstance, { BaseUrl, Token } from "../../Config/BaseUrl"
import { EndPoints } from "../../Config/EndPoints"


export const  GetMainCategory=()=>{

    try{

        const response = axiosInstance.get(EndPoints.mainCat,{
          
        })
        return response;
    }catch(e){
        throw new console.log(e)
    }
}