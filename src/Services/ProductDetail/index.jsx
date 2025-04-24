import axios from "axios"
import axiosInstance, { BaseUrl, Token } from "../../Config/BaseUrl"
import { EndPoints } from "../../Config/EndPoints"


export const  GetProductDetails=(reqBody)=>{
    

    try{

        const response = axiosInstance.get(EndPoints.productDetails,{

            params:reqBody,
          
        })
        return response;
    }catch(e){
        throw new console.log(e)
    }
}