import axios from "axios";
const apiKey = "Sb8fEdhcOkmfyXBlhTQVnWp1f4ZaJVi8ytm6ofCnTqE";
export const getImagesByQuery = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=${page}&query=${query}&per_page=20`
  );
  return data;
};


