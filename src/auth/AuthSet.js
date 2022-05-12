import React, { useState } from "react";
import { authService } from "fbase";
import { updateProfile } from "firebase/auth";

const AuthSet = ({ userDb, refresher }) => {
  const [photoURL, setPhotoURL] = useState(userDb.photoURL);
  const [displayName, setDisplayName] = useState(userDb.displayName);
  const onSubmit = (e) => {
    e.preventDefault();
    updateProfile(authService.currentUser, {
      photoURL: { photoURL },
      displayName: { displayName }
        .then(() => {
          console.log("업데이트가 완료되었습니다");
        })
        .catch((error) => {
          console.log(error);
        }),
    });
  };
  const onChange = (e) => {
    const {
      target: { name, value, files },
    } = e;

    if (name === "name") {
      setDisplayName(value);
    } else if (name === "photo") {
      const photo = files[0];
      const reader = new FileReader();
      reader.onload = (finishedEvent) => {
        const {
          currentTarget: { result },
        } = finishedEvent;
        setPhotoURL(result);
      };
      reader.readAsDataURL(photo);
    }
  };

  return (
    <form className="authset">
      <div className="authset-photo">
        <span>프로필 사진</span>
        <img src={photoURL} alt="profile" />
        <input type="file" onChange={onChange} name="photo"></input>
      </div>
      <div className="authset-displayname">
        <span>별명</span>
        <input
          type="text"
          value={displayName}
          placeholder="바꾸실 별명을 입력해주세요"
          onChange={onChange}
          name="name"
        ></input>
      </div>
      <div className="authset-password">
        <span>비밀번호</span>
        <input type="password"></input>
      </div>
      <button type="submit" onSubmit={onSubmit}>
        변경
      </button>
    </form>
  );
};

export default AuthSet;
