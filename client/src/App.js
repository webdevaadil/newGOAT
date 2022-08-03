import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
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
import { ProtectedRoute } from "./components/Route/ProtectedRoute";


function App() {

  
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
          <Route path = "/horsedetails" element = {<HorseDetails/>}/>
          <Route path = "/greydetails" element = {<Greydetails/>}/>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<Profile/>} />
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
