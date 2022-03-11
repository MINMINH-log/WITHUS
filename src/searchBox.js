/* eslint-disable */
import React, { useState, useCallback, useEffect, useRef } from "react";
import "../src/css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const SearchBox = ({ dropdownContents, type, hidden, setHidden, category }) => {
  const [clickCategory, setClickCategory] = useState("전체");
  const onClickCategory = useCallback(
    (current) => setClickCategory(current),
    []
  );

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * close dropdown box if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setHidden((current) => false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  /**
   * Component that alerts if you click outside of it
   */
  function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>;
  }

  OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired,
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setHidden((current) => false);
      }
    };

    window.addEventListener("keydown", handleEsc);
  }, []);

  const DropdownContents = () => {
    return (
      <ul
        className={
          hidden ? `dropdown-contents ${category}` : "dropdown-contents hidden"
        }
      >
        {dropdownContents.map((c) => (
          <li
            key={c.name}
            className="dropdown-content"
            active={clickCategory === c.text ? "true" : "false"}
            onClick={(event) => {
              onClickCategory(c.text);
              setHidden((current) => false);
            }}
          >
            {c.text}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <form className={`${type} search-bar`} role="search">
      <OutsideAlerter>
        <div className="dropdown">
          <span className={`${type} category-chosen`}>{clickCategory}</span>
          <span className="search-category">
            <FontAwesomeIcon
              icon={faAngleDown}
              className="down-i"
              onClick={() => {
                setHidden((current) => !current);
              }}
            />
          </span>
          <DropdownContents dropdownContents={dropdownContents} />
        </div>
      </OutsideAlerter>
      <input
        className="search"
        type="text"
        autoComplete="off"
        role="searchbox"
      />
      <button className="search-btn" type="submit" aria-label="Submit button">
        <FontAwesomeIcon icon={faSearch} className="search-i" />
      </button>
    </form>
  );
};
export default SearchBox;
