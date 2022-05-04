const GifList = ({ giphyData }) => {
  return (
    <div className="giphy-data">
      {giphyData.map((gif) => {
        return (
          <img
            className="giphy-image"
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.slug}
          />
        );
      })}
    </div>
  );
};

export default GifList;
