import React from "react";
import PropTypes from "prop-types";

const ReviewsItem = (props) => {

  const {text, user, date, rating} = props.review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54"
            alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    user: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number.isRequired,
  })
};

export default ReviewsItem;
