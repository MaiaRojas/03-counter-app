

/* const getImagenPromise = () => {
  return new Promise(resolve => resolve('http'))
};

getImagenPromise.then(console.log('Dta')) */



export const getImage = async () => {
  try {
    const apiKey = 'ZUIjLsw3Y5qSnvdRO42z2OwB5JhHVFer';

    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await  peticion.json();
    const { url } = data.images.original;
    return url;

  } catch (error) {
    return 'Doe not exist';
  }
};

getImage();

