

import axios from "axios";
const apiKey = "Sb8fEdhcOkmfyXBlhTQVnWp1f4ZaJVi8ytm6ofCnTqE";
export const getImagesByQuery = async <T>(query: string, page: number):Promise<T> => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=${page}&query=${query}&per_page=20`
  );
  return data;
};


