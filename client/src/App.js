import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom"

import { Main } from "./components/Main/Main";
import { Signup } from "./components/Signup/Signup";
import { Login } from "./components/Login/Login";
import { PaymentMethoad } from "./components/Profile/PaymentMethoad";
import { Profile } from "./components/Profile/Profile";
import { AccountSetting } from "./components/Profile/AccountSetting";
import { Dashboard } from "./components/Profile/Dashboard";
import { Thoroughbreds } from "./components/Main/Thoroughbreds";
import { Greyhounds } from "./components/Main/Greyhounds";
import { HorseDetails } from "./components/Main/HorseDetails";
import { Greydetails } from "./components/Main/Greydetails";
import { About } from "./components/Profile/About";
import { Metadata } from "./components/layout/Metadata";
import { Package } from "./components/Signup/Package";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./components/Route/ProtectedRoute";


function App() {
  const {  isAuthenticated } = useSelector(
    (state) => state.user
  );
  
=======
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apidata } from "./actions/apiAction";


function App() {


>>>>>>> a78a3b450031b6b253c99b928b5a4f0a37d13c05
  return (
    <>
      <Metadata title="The Goat Tips" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thoroughbreds" element={<Thoroughbreds/>}/>
          <Route path="/greyhounds" element={<Greyhounds/>}/>
<<<<<<< HEAD
          <Route path = "/horsedetails" element = {<HorseDetails/>}/>
          <Route path = "/greydetails" element = {<Greydetails/>}/>
            <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard />       </ProtectedRoute>}>
              <Route path="" element={
                <Profile/>
       } />
=======
          <Route path = "/horsedetails/:id" element = {<HorseDetails/>}/>
          <Route path = "/greydetails/:id" element = {<Greydetails/>}/>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<Profile/>} />
>>>>>>> a78a3b450031b6b253c99b928b5a4f0a37d13c05
              <Route path="payment" element={<PaymentMethoad />} />
              <Route path="accountsetting" element={<AccountSetting />} />
              <Route path="about" element={<About/>} />
            </Route>
              <Route path = "/packages" element = {<Package/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
