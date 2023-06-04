import { useQuery } from '@tanstack/react-query'
import genres from '../data/genre'
import apiClient, { FetchResponse } from '../services/api-client'

export interface Genre {
    id: number,
    name: string,
    image_background: string
}


const useGenres = () => useQuery(({
    queryKey: ['genres'],
    queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
    initialData: {count: genres.length, results: genres}
}))


export default useGenres