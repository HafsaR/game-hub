import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
