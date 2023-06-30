import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Projects from "../routes/Projects";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>
  );
}
