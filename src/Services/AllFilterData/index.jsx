import axios from "axios";
import axiosInstance, { BaseUrl, Token } from "../../Config/BaseUrl";
import { EndPoints } from "../../Config/EndPoints";

export const GetFilterData = async (reqbody) => {
  try {
    const response = await axiosInstance.post(
      EndPoints.filterData,

      reqbody,
     
    );

    return response;
  } catch (e) {
    console.log(e);
  }
};
