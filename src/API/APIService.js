import axios from "axios";
const BASE_NEWS_URL = "https://jsonplaceholder.typicode.com/posts";
const BASE_PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";

export default class APIService {
  static async getAllPhotos() {
    const response = await axios.get(BASE_PHOTOS_URL);
    return response;
  }
  static async getPhotoById(id) {
    const response = await axios.get(BASE_PHOTOS_URL + "/" + id);

    return response;
  }

  static async getAllNews() {
    const response = await axios.get(BASE_NEWS_URL);
    return response;
  }
  static async getNewsById(id) {
    const response = await axios.get(BASE_NEWS_URL + "/" + id);

    return response;
  }
}
