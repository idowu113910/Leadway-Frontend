import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Leadway";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";
import Insurance from "./pages/Insurance";
import Verify from "./pages/Verify";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="/verify" element={<Verify />} />

            <Route element={<RootLayout />}>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blog"
                element={
                  <ProtectedRoute>
                    <Blog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <ProtectedRoute>
                    <Contact />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/insurance"
                element={
                  <ProtectedRoute>
                    <Insurance />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
