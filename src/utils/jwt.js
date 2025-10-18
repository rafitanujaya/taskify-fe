export const decodeJWT = (token) => {
  try {
    const base64Payload = token.split('.')[1];
    const payload = JSON.parse(atob(base64Payload));
    return payload
  } catch (err) {
    console.error("Failed to decode token:", err);
    return null;
  }
};
