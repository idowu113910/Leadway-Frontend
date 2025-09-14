import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Leadway";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import RootLayout from "./layout/RootLayout";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<SignUp />} />

          <Route element={<RootLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
