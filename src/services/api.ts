import axios from "axios";
import { ImageData } from "../ types";



interface UnsplashResponse {
  results: ImageData[];
  total_pages: number;
}

const getImagesByQuery = async (query: string, page: number): Promise<UnsplashResponse> => {
  const apiKey: string | undefined = process.env.REACT_APP_UNSPLASH_API_KEY;
  if (!apiKey) {
    throw new Error('Unsplash API key is not provided');
  }
  
  const { data } = await axios.get<UnsplashResponse>(
    `https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=${page}&query=${query}&per_page=20`
  );
  return data;
};

export default getImagesByQuery;


