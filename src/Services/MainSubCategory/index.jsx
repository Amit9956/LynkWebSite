import axios from "axios"
import axiosInstance, { BaseUrl, Token } from "../../Config/BaseUrl"
import { EndPoints } from "../../Config/EndPoints"



export const MainSubApi = ()=>{

    try{

        const response =axiosInstance.get(EndPoints.mainSubCat,{
            headers:{
                Authorization:Token
            }
        })
  
        return response
  
      }catch(e){
           throw new console.log(e)
      }
     

}
  