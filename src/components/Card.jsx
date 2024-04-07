import PropTypes from "prop-types";

const Card = ({ img }) => {
  console.log(img);
  return (
    <div className='card'>
      <div className='card__img'>
        <img src={img} alt='Card image' />
      </div>
      <div className='card__details'>
        <h3 className='card__details--title'>Card Title</h3>
        <p>
          Some quick example of a card and its components. It consists of image
          title and some text to describe
        </p>
      </div>
      <button>Button</button>
      <a href='https://www.pexels.com'>
        <img
          src='https://images.pexels.com/lib/api/pexels-white.png'
          style={{ width: "100%" }}
        />
      </a>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
