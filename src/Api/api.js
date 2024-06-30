import axios from "axios";

const getData = async ([params, tag]) => {
  const options = {
    method: "GET",
    url: `https://spotify23.p.rapidapi.com/${tag}/`,
    params: params,
    headers: {
      "x-rapidapi-key": "ebe032694cmsh985fe3c5d018e09p193579jsnac5e26aa8eec",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getData;
