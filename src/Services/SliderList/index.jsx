import axios from "axios";
import { BaseUrl, Token } from "../../Config/BaseUrl";
import { EndPoints } from "../../Config/EndPoints";

export const GetSliderlistFn = () => {
  try {
    const response = axios.get(BaseUrl + EndPoints.sliderList, {
      headers: {
        Authorization:Token,
      }
    })

    return response;
  } catch (e) {
    throw new console.error(e);
  }
};
