import axios from "axios";
import Cookies from "universal-cookie";

const makeApiCall = async (url, method, data) => {
  const cookies = new Cookies();
  const token = cookies.get("accessToken");
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      url,
      data,
    });
    return response;
  } catch (error) {
    throw error?.response?.data;
  }
};

export default makeApiCall;
