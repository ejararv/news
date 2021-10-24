import axios from "axios";
const BASE_NEWS_URL = "https://jsonplaceholder.typicode.com/posts";
const BASE_ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";

export default class APIService {
  static async getAllAlbums(limit, page) {
    const response = await axios.get(BASE_ALBUMS_URL, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }
  static async getAlbumById(id) {
    const response = await axios.get(BASE_ALBUMS_URL + "/" + id);
    return response;
  }

  static async getFirstPhotoOfAlbum(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=1`
    );
    return response.data[0].thumbnailUrl;
  }

  static async getAllNews() {
    const response = await axios.get(BASE_NEWS_URL);
    return response;
  }
  static async getNewsById(id) {
    const response = await axios.get(BASE_NEWS_URL + "/" + id);
    return response;
  }

  static async getCommentsByNewsId(id) {
    const response = await axios.get(BASE_NEWS_URL + "/" + id + "/comments");
    return response;
  }
}
