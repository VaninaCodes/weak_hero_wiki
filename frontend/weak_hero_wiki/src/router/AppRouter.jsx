import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "../pages/HomePage";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
