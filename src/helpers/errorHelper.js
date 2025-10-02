export function handleError(error) {
  if (error.response && error.response.status === 442) {
    return error.response.data.errors;
  } else if (error.response && error.response.status === 401) {
    return error.response.data.message;
  } else if (error.response && error.response.status === 400) {
    return error.response.data.message;
  } else if (error.response && error.response.status === 500) {
    return error.response.data.message;
  } else {
    alert("Something went wrong. please try again later");
  }
}
