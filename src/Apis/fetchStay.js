import Axios from "axios";
// const fetchStay =
const fetchApi = Axios.create({
  baseURL: "https://need-based-stay.herokuapp.com/",
});
export default fetchApi;
