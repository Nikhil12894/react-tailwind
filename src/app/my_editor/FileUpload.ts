import axios from "axios";

const BASE_URL = "http://localhost:8080/taskservice";
const fetchImages = async (url: string) => {
  const response = await axios.get(`${BASE_URL}${url}/string`);
  return response.data;
};

const handleUpload = async (file: File | null): Promise<string> => {
  if (!file) return "";
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${BASE_URL}/images/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response.data);
  if (!response.data) return "";

  return `${BASE_URL}${response.data.data}/string`;
};

export { fetchImages, handleUpload };
