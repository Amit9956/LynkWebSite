import axios from "axios";
import axiosInstance, { BaseUrl, Token } from "../../Config/BaseUrl";
import { EndPoints } from "../../Config/EndPoints";

export const GetSliderlistFn = () => {
  try {
    const response = axiosInstance.get(EndPoints.sliderList, {
      
    })

    return response;
  } catch (e) {
    throw new console.error(e);
  }
};
