const api_url = "https://zenquotes.io/api/random";

async function getquote(url){
   fetch("https://zenquotes.io/api/random")
  .then(response => response.json())
  .then(data => {
    console.log(`"${data[0].q}" - ${data[0].a}`);
  })
  .catch(error => console.error("Error fetching quote:", error));

}
getquote(api_url);