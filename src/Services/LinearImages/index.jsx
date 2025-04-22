import axios from "axios";
import { BaseUrl, Token } from "../../Config/BaseUrl";
import { EndPoints } from "../../Config/EndPoints";

export const GetBrandlistFn = () => {
  try {
    const response = axios.get(BaseUrl + EndPoints.linearImages, {
      headers: {
        Authorization:Token,
      },
    });
    return response;
  } catch (e) {
    throw new console.error(e);
  }
};
