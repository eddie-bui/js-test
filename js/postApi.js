import fetchData from "./fetchApi";

export const postApi = {
  getSuggestion() {
    const url = "https://api.json-generator.com/templates/dyj6ivO6Zbzv/data";
    return fetchData(url);
  },
  getCollection() {
    const url = "https://api.json-generator.com/templates/JiITcIZCWfAu/data";
    return fetchData(url);
  },
  getProduct() {
    const url = "https://api.json-generator.com/templates/jhOhdH17h06a/data";
    return fetchData(url);
  },
};
