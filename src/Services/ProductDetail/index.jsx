import axios from "axios"
import { BaseUrl, Token } from "../../Config/BaseUrl"
import { EndPoints } from "../../Config/EndPoints"


export const  GetProductDetails=(reqBody)=>{
    

    try{

        const response = axios.get(BaseUrl+EndPoints.productDetails,{

            params:reqBody,
            headers:{
                Authorization:Token
            }
        })
        return response;
    }catch(e){
        throw new console.log(e)
    }
}