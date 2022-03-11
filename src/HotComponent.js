/*eslint-disable*/
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";
import { Link } from "react-router-dom";
import toggleHeart from "./useToggleHeart";

const HotComponent = ({
  content,
  selectCategory,
  setCategorySelected,
  order,
  startIndex,
}) => {
  const { id, writer, img, prgp, src, time, like, comment, likeClicked } =
    content;

  return (
    <li className="hot-content" id={id}>
      <div className="hot-img-part">
        <span className="hot-num-block">
          <span className="hot-num">{order + 1 + startIndex}</span>
        </span>
        <img className="hot-img" src={require("../src/img/withus_empty.jpg")} />
      </div>

      <div className="hot-noimg-part">
        <Link to={`/readmore`}>
          <p className="hot-description">{prgp}</p>
        </Link>

        <div className="like-comment">
          <span className="like-span">
            <span className="like">
              <span
                className="like-icon"
                onClick={() => toggleHeart(likeClicked, setCategorySelected)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </span>
            <span className="like-count">{like}</span>
          </span>

          <span className="comment">
            <FontAwesomeIcon icon={faCommentAlt} className="comment-i" />
            <span className="comment-count">{comment}</span>
          </span>
        </div>
        <div className="src-time">
          <span className="src">{src}</span>
          <span className="time">{time}</span>
        </div>
      </div>
    </li>
  );
};

export default HotComponent;
