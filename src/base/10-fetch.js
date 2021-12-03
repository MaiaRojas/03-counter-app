const apiKey = 'OyHxC5PSZLYcgZV31MQ438h3ZIazMs67';


const callUrl = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

callUrl
  .then(resp => resp.json())
  .then(({ data })=> {

    const { url } = data.images.original;
    const img = document.createElement('img');

    img.src = url;

    document.body.append(img);
  })
  .catch(err => console.log(err))

