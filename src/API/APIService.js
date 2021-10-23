const BASE_URL = `https://jsonplaceholder.typicode.com/photos?_limit=10`;

export default class APIService {
  static async getAll(limit = 20) {
    const response = await fetch(BASE_URL, {
      params: {
        _limit: limit,
      },
    })
      .then((res) => res.json())
      .then((data) => data);
    return response;
  }
  static async getById(id) {
    const response = await fetch(BASE_URL + id)
      .then((res) => res.json())
      .then((data) => data);
    return response;
  }
}
