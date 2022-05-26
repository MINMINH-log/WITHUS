/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "auth/LoginPage";
import RegisterPage from "auth/RegisterPage";
import Home from "Components/Home";
import Major from "Components/Major";
import Free from "Components/Free";
import Survey from "Components/Survey";
import Ask from "Components/Ask";
import Info from "Components/Info";
import Promote from "Components/Promote";
import Theme from "Components/Theme";
import AuthSet from "auth/AuthSet";
import { authService, storageService } from "fbase";
import { ref, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import NavbarComponent from "Components/NavbarComponent";
import WritePage from "write/WritePage";
import "css/Main.css";

const App = () => {
  const [userDb, setUserDb] = useState(null);
  const [sampleProfilePhoto, setSampleProfilePhoto] = useState("");

  const downloadSamplePhoto = async () => {
    getDownloadURL(ref(storageService, "withus_empty.jpg")).then((response) => {
      setSampleProfilePhoto(response);
    });

    return sampleProfilePhoto;
  };

  const onSetInitValue = async (user) => {
    if (user.displayName === null) {
      updateProfile(user, {
        displayName: user.email.split("@")[0],
      });
    }
    if (user.photoURL === null) {
      downloadSamplePhoto();
      updateProfile(user, {
        photoURL: sampleProfilePhoto,
      });
    }
  };

  const authStateChanged = async () => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        onSetInitValue(user);
      }
    });
  };
  const refreshUser = () => {
    let user = authService.currentUser;
    if (user) {
      setUserDb({
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
      });
    }
  };

  useEffect(() => {
    authStateChanged().then(() => {
      refreshUser();
    });
  }, []);

  // userDb refresh

  console.log(userDb, authService.currentUser);
  return (
    <div className="wrap">
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={<Home userDb={userDb} refreshUser={refreshUser} />}
        />
        <Route
          path="Major"
          element={<Major userDb={userDb} refreshUser={refreshUser} />}
        />
        <Route
          path="Free"
          element={<Free userDb={userDb} refreshUser={refreshUser} />}
        />
        <Route
          path="Theme"
          element={<Theme userDb={userDb} refreshUser={refreshUser} />}
        />
        <Route
          path="Ask"
          element={<Ask userDb={userDb} refreshUser={refreshUser} />}
        />
        <Route
          path="Survey"
          element={<Survey userDb={userDb} refreshUser={refreshUser} />}
        />
        <Route
          path="Info"
          element={<Info userDb={userDb} refreshUser={refreshUser} />}
        />
        <Route
          path="Promote"
          element={<Promote userDb={userDb} refreshUser={refreshUser} />}
        />
        <Route
          path="Register"
          element={<RegisterPage userDb={userDb} refreshUser={refreshUser} />}
        />
        <Route
          path="Login"
          element={<LoginPage userDb={userDb} refreshUser={refreshUser} />}
        />
        <Route
          path="write"
          element={<WritePage userDb={userDb} refreshUser={refreshUser} />}
        />

        <Route
          path="userhelp"
          element={<AuthSet userDb={userDb} refreshUser={refreshUser} />}
        />
      </Routes>
    </div>
  );
};

export default App;
