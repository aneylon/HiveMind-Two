import { handleError, handleResponse, request } from "./Utils";

const url = "http://localhost:3000/news";

export const GetNews = () => {
  return request("GET", url).then(handleResponse).catch(handleError);
};

export const AddNews = (news) => {
  return request("POST", url, news).then(handleResponse).catch(handleError);
};
