import axios from "axios";

const KEY = "AIzaSyDvuDm-5grKc2qHHte6-Iw5RkskZoKy2Pw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
