import React, { useEffect, useState } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { dbService, storageService, authService } from "fbase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "css/AuthSet.css";
const AuthSet = ({ userDb, refreshUser }) => {
  const navigate = useNavigate();
  const [attachment, setAttachment] = useState("");
  let [photoURLDownloaded, setPhotoURLDownloaded] = useState(userDb.photoURL);
  const [newDisplayName, setNewDisplayName] = useState(userDb.displayName);
  const [loading, setLoading] = useState("");

  const onChange = async (e) => {
    setLoading("로딩 중");
    const {
      target: { name, value, files },
    } = e;

    if (name === "name") {
      setNewDisplayName(value);
    } else if (name === "photo") {
      const photo = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const {
          target: { result },
        } = event;
        setAttachment(result);
      };
      reader.readAsDataURL(photo);

      if (attachment !== "") {
        const storageRef = ref(storageService, `${userDb.uid}/photoURL.jpg`);
        await uploadString(storageRef, attachment, "data_url");
        await getDownloadURL(storageRef)
          .then((result) => setPhotoURLDownloaded(result))
          .then(() => {
            setLoading("사진이 성공적으로 업로드 되었습니다.");
          });
      }
    }
  };
  const onUpdateProfile = async (e) => {
    e.preventDefault();
    if (window.confirm("변경하시겠습니까")) {
      if (userDb.photoURL !== photoURLDownloaded) {
        await updateProfile(await authService.currentUser, {
          displayName: newDisplayName,
          photoURL: photoURLDownloaded,
        }).then(() => {
          refreshUser();
        });
      } else if (userDb.displayName !== newDisplayName) {
        await updateProfile(await authService.currentUser, {
          displayName: newDisplayName,
        }).then(() => {
          refreshUser();
        });
      }
      navigate("/");
    }
  };

  return (
    <form className="authset">
      <div className="title authset">프로필 수정</div>
      <div className="authset-photo">
        <span>프로필 사진</span>
        <img src={photoURLDownloaded} alt="profile" />
        <div className="authset-photo-btn">
          <label htmlFor="fileUploader">사진선택</label>
          <input
            type="file"
            id="fileUploader"
            onChange={onChange}
            name="photo"
          ></input>
          <div className="loading-msg">
            <span>{loading}</span>
          </div>
        </div>
      </div>
      <div className="authset-displayname">
        <span>별명</span>
        <input
          type="text"
          value={newDisplayName}
          placeholder="바꾸실 별명을 입력해주세요"
          onChange={onChange}
          name="name"
        ></input>
      </div>
      <div className="authset-password">
        <span>비밀번호</span>
        <input type="password"></input>
      </div>
      <button type="submit" onClick={onUpdateProfile}>
        변경
      </button>
    </form>
  );
};

export default AuthSet;
