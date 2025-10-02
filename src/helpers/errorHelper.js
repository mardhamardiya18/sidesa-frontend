export function handleError(error) {
  if (error.response) {
    const { status, data } = error.response;
    if (status === 422) return data.errors;
    return data.message || "Unexpected server error";
  }
  return error.message || "Something went wrong";
}
