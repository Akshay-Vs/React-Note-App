import axios from "axios";

const postData = async <Type>(url: string, data?: Type) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${url}:`, error);
  }
};

export default postData;
