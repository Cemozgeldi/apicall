import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID cSJDkwkdp42WCsUimQ7zIYVOBQozMLQvWSBN3k3C_ls",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
