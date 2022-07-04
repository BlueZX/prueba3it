import axios, { AxiosResponse } from "axios";
import { API_URL, API_KEY } from '@env';


const apiConnect = async(request: string): Promise<AxiosResponse<any, any>> => {
  return axios.get(`${API_URL}/api-sbifv3/recursos_api/${request}?apikey=${API_KEY}&formato=json`,{
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    }
  });
};

export default apiConnect;