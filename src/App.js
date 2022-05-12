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

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "Components/NavbarComponent";
import WritePage from "write/WritePage";

const App = () => {
  const [userDb, setUserDb] = useState(null);
  const [sampleProfilePhoto, setSampleProfilePhoto] = useState("");
  const getSampleProfilePhoto = async () => {
    await getDownloadURL(ref(storageService, "withus_empty.jpg"))
      .then((response) => {
        setSampleProfilePhoto(response);
      })
      .then(() => {
        onAuthStateChanged(authService, (user) => {
          if (user) {
            if (user.displayName === null) {
              updateProfile(user, {
                displayName: user.email.split("@")[0],
              });
            }
            if (user.photoURL === null) {
              updateProfile(user, {
                photoURL: sampleProfilePhoto,
              });
            }
            setUserDb({
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
            });
          }
        });
      });
  };

  // setUserDb
  useEffect(() => {
    getSampleProfilePhoto();
  }, []);

  // userDb refresh
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserDb({
      uid: user.uid,
      displayName: user.displayName,
    });
  };
  return (
    <>
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
    </>
  );
};

export default App;
