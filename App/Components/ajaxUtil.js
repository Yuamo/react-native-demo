 

async function getMoviesFromApi(urlStr) {
  console.log(urlStr)
  try {
    let response = await fetch(urlStr);
    let responseJson = await response.json();
    return responseJson.subjects;
  } catch (error) {
    console.error(error);
  }
}

export default getMoviesFromApi