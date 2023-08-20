



export const GifGrid = ({ category }) => {

   
    const getGifs = async( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${ category }&limit=10`;
        console.log(url);
        const resp = await fetch( url );
        const { data } = await resp.json();
    
        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        
        console.log(gifs);
    }

  return (
    <>
       <h3>{ category}</h3>
    </>
  )
}
