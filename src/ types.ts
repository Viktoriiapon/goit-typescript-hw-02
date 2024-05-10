import { string } from "yup";

export interface ImageData{
    id: string;
    alt_description: string;
    likes: number;
    slug: string;
    user:
    {
        first_name: string;
        last_name: string;

    };
  
    urls:
    {
        regular: string;
        small: string;
        
    };
   
   
}
export type ReplyData = {
    total: number;
    total_pages: number;
    results: ImageData[];
  };