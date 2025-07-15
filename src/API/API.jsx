export function request(method, url, body) {
  body = JSON.stringify(body);
  const options = {
    method: method.toUpperCase(),
    headers: { "Content-Type": "application/json", ...authHeader() },
    body,
  };
  return fetch(url, options);
}

export function authHeader() {
  const user = localStorage.getItem("user");
  if (user !== undefined && user !== null) {
    return { Authorization: `Bearer ${user.jwt}` };
  }
  return {};
}

export function handleResponse(response) {
  console.log({ response });
  if (response.ok) return response.json();

  const error = response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Error occurred.", error);
  throw error;
}
