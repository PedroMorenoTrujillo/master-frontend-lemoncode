import { AxiosConfig } from "./axios.config";

export const AxiosGet = async (url: string) => {
  return await AxiosConfig.get(url);
};
