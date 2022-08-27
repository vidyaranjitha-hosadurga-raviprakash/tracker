import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://vhr-tracker.herokuapp.com/",
});

export default axiosClient;
