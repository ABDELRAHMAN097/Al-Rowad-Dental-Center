import Nav from "../src/Components/Nav/index.js";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About/index.js";
import Services from "./pages/Services/index.js";
import Contact from "./pages/Contact/index.js";
import Doctors from "./pages/Doctors/index.js";
import APPOINTMENT from "./Components/APPOINTMENT/index.js";
import Footer from "./Components/Footer";
import Notfound from "./Components/Notfound/Notfound.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import Dashboard from './pages/Dashboard/Dashboard.js'
import Users from "./pages/User/Users.js"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import NotLoggedIn from "./Components/ProtectedRoutes/NotLoggedIn.js";
import IsloggedIn from "./Components/ProtectedRoutes/IsloggedIn.js";
import IsAdmin from "./Components/ProtectedRoutes/IsAdmin.js";
import IsOwenr from "./Components/ProtectedRoutes/IsOwenr.js";
import DrReview from "./Components/DrReview/DrReview.js";
import Orthopedic from './pages/Services/Orthopedic.js'
import Mother from "./pages/Services/Mother.js";
import Heart from "./pages/Services/Heart.js";
import Neurology from "./pages/Services/Neurology.js";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js"
export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Nav />
          <ScrollToTop />
          <Routes>
         
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services /> } />
              <Route path="contact" element={<Contact /> } />
              <Route path="doctors" element={<Doctors />} />
              <Route path="DrReview" element={<DrReview />} />
              <Route path="Heart" element={<Heart />} />
              <Route path="neurology" element={<Neurology />} />
              <Route path="Orthopedic" element={<Orthopedic />} />
              <Route path="Mother" element={<Mother />} />
              <Route path="Dashboard" element={
                <IsloggedIn>
                  <IsAdmin>
                   <Dashboard />
                  </IsAdmin>
                </IsloggedIn>
              } />
              <Route path="Users" element={
                <IsloggedIn>
                  <IsOwenr>
                  <Users />
                  </IsOwenr>
                </IsloggedIn>
              } />
              <Route path="APPOINTMENT" element={
                <IsloggedIn>
                  <APPOINTMENT />
                </IsloggedIn>
              } />
              <Route path="doctors" element={
                <IsloggedIn>
                  <Doctors />
                </IsloggedIn>
              } />
              <Route path="register" element={
                <NotLoggedIn>
                  <Register/>
                </NotLoggedIn>
              } />
              <Route path="login" element={
                <NotLoggedIn>
                  <Login/>
                </NotLoggedIn>
              } />
              <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
          <Footer />
          <Outlet />
        </BrowserRouter>
      </RecoilRoot>
      <ToastContainer />
    </div>
  );
}
