import axios from "axios";
const baseUrl = "https://nba-page-cf0253c037d1.herokuapp.com/scoutingReports";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((res) => res.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((res) => res.data);
};
// eslint-disable-next-line
export default {getAll,create,update};
