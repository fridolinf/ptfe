import { RANDOM_USER_BASE_URL } from "api/baseUrl";
import * as services from "helpers/axiosHelper";

export const getRandomUser = async () => {
  try {
    const request = await services.GET(`${RANDOM_USER_BASE_URL}/?results=25`);
    if (request.status === 200) {
      const { data } = request;
      return data && data.results;
    }
  } catch (error) {
    console.log(error, "err");
  }
};
