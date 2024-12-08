import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile posts={props.posts} />} />
            <Route path='/dialogs/*' element={<Dialogs userData={props.userData} messageData={props.MessageData} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
