import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인상태가되고 false면 로그아웃상태
  useEffect(() => {
    console.log("로그인");
  }, [authenticate]); //의존성배열에 값이 있을때 그값이 바뀔떄마다 함수가 다시 실행
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/Product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </>
  );
}

export default App;
