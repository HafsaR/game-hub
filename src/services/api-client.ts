import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null
  results: T[];
}

const axiosInstance = axios.create({
  params: {
    key: "04d898884ffd4f6985462d7221d8fdb5",
  },
  baseURL: "https://api.rawg.io/api",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  }
}

export default APIClient
