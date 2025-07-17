import { handleError, handleResponse, request } from "./Utils";

const url = "http://localhost:3000/note";

export const GetNotes = () => {
  return request("GET", url).then(handleResponse).catch(handleError);
};

export const UpdateNote = (note) => {
  return request("PUT", `${url}/${note.id}`, note)
    .then(handleResponse)
    .catch(handleError);
};
