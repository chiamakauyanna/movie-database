import PropTypes from 'prop-types';

const TrailerEmbed = ({ trailer }) => (
  <div className="aspect-w-16 aspect-h-9 w-full h-[300px]">
    <iframe
      className='w-full'
      height="100%"
      src={`https://www.youtube.com/embed/${trailer}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video player"
    />
  </div>
);

TrailerEmbed.propTypes = {
  trailer: PropTypes.string.isRequired,
};

export default TrailerEmbed;
