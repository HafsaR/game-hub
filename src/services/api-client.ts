import axios from "axios";

export default axios.create({
    params: {
        key: '04d898884ffd4f6985462d7221d8fdb5'
    },
    baseURL: 'https://api.rawg.io/api',
  });