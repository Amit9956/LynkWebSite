import axios from "axios";
import { BaseUrl, Token } from "../../Config/BaseUrl";
import { EndPoints } from "../../Config/EndPoints";

export const GetFilterData = async (reqbody) => {
  try {
    const response = await axios.post(
      BaseUrl + EndPoints.filterData,

      reqbody,
      {
        headers: {
          Authorization: Token,
        },
      }
    );

    return response;
  } catch (e) {
    console.log(e);
  }
};
