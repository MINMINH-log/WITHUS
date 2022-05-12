/*eslint-disable*/
import React, { useState } from "react";
import { dbService } from "fbase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "css/WritePage.css";

const WritePage = ({ userDb }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [categorySelected, setCategorySelected] = useState("major");
  const [attachment, setAttachment] = useState([]);

  const onChangePhoto = (e) => {
    const {
      target: { files },
    } = e;
    const selectedFiles = [];
    const theFiles = [...files];
    theFiles.map((file) => {
      return selectedFiles.push(URL.createObjectURL(file));
    });
    setAttachment(selectedFiles);
  };

  const onClearPhoto = (e) => {
    const {
      target: { id },
    } = e;
    setAttachment((prev) => prev.filter((value) => value !== attachment[id]));
  };
  const onSelectCategory = (e) => {
    setCategorySelected(e.target.value);
  };
  const onChange = (e) => {
    const {
      target: { value, className, innerText },
    } = e;
    if (className === "title") {
      setTitle(value);
    } else if (className === "content") {
      setContent(innerText);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (title !== "" && content !== "") {
      try {
        await addDoc(collection(dbService, "data"), {
          userId: userDb.uid,
          categorySelected: categorySelected,
          title: title,
          content: content,
          img: attachment,
        });

        navigate("/");
      } catch (e) {
        console.log(e);
      }
    } else if (title === "") {
      setError("제목을 입력해주세요");
    } else if (content === "") {
      setError("내용을 입력해주세요");
    }
  };

  return (
    <form className="editor" onSubmit={onSubmit}>
      <select onChange={onSelectCategory} className="category-select-box">
        <option value="major">학과별</option>
        <option value="free">자유</option>
        <option value="theme">테마</option>
        <option value="ask">고민</option>
        <option value="survey">설문</option>
        <option value="info">정보</option>
        <option value="promote">홍보</option>
      </select>
      <input
        type="text"
        onChange={onChange}
        value={title}
        className="title"
        placeholder="제목을 입력하세요"
      />
      <div type="text" onInput={onChange} className="content" contentEditable />
      <div className="photo-editor">
        <input
          type="file"
          accept="image/*"
          className="submit"
          onChange={onChangePhoto}
          multiple
        />
        {attachment &&
          attachment.map((url, i) => (
            <div key={i} className="item">
              <img src={url} width="120px" height="120px" />
              <button className="clear" onClick={onClearPhoto} id={i}>
                X
              </button>
            </div>
          ))}
      </div>

      <div className="bottom-bar">
        {error && <div className="error-msg">{error}</div>}

        <input type="submit" className="submit" value="작성" />
      </div>
    </form>
  );
};

export default WritePage;
