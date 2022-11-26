import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = "29528567-7e538c7cf33df2404e5c0ef32";

export const getImages = async(searchValue, page, perPage) => {
 
    const response = await axios.get(`?key=${API_KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&safeSearch=true&page=${page}&per_page=${perPage}`);
    return response.data

}
