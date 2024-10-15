import PropTypes from 'prop-types';

const YoutubeTrailerEmbed = ({ trailer }) => (
  <div className="aspect-w-16 aspect-h-9 w-full">
    <iframe
      title="Trailer"
      className="w-full"
      height="315"
      src={`https://www.youtube.com/embed/${trailer}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

YoutubeTrailerEmbed.propTypes = {
  trailer: PropTypes.string.isRequired,
};

export default YoutubeTrailerEmbed
