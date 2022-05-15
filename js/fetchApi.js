const token = "Bearer xmr2wna5aj7t3012pcxgriqhd9c8u88kpttc1a3j";

async function fetchData(url) {
  try {
    const res = await fetch(url, {
      headers: {
        authorization: token,
      },
    });

    const response = await res.json();

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export default fetchData;
