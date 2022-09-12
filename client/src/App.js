import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import { Main } from "./components/Main/Main";
import Home from "./components/Main/Home";
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
import { Aboutus } from "./components/extra/About";

// import { ProtectedRoute } from "./components/Route/ProtectedRoute";
import { Multilf } from "./multi/Multilf";
import { Thankyou } from "./components/Profile/Thankyou";
import { useDispatch, useSelector } from "react-redux";
import { loaduser } from "./actions/userAction";
import { Paypa } from "./multi/Stepform/Password";

function App() {
  const dispatch = useDispatch();
  dispatch(loaduser())
  const local = JSON.parse(localStorage.getItem("comuser"))
// console.log(local.user);
  return (
    <>
      <Metadata title="The Goat Tips" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
          <Route path="/signup" element={<Multilf />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thoroughbreds" element={<Thoroughbreds />} />
          <Route path="/greyhounds" element={<Greyhounds />} />
          <Route
            path="/horsedetails/:id/:location"
            element={<HorseDetails />}
          />
          <Route path="/greydetails/:id/:location" element={<Greydetails />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Profile />} />
            <Route path="payment" element={<PaymentMethoad />} />
            <Route path="accountsetting" element={<AccountSetting />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/privacy-policy" element={<Aboutus />} />
          <Route path="/packages" element={<Package />} />
          <Route path="/pac" element={<Multilf />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/password" element={<Paypa/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
export function ProtectedRoute(props) {
  const local = JSON.parse(localStorage.getItem("comuser"))
if(local){

  if (local.user.paymentstatus==="false") {
    return <Navigate to="/password" />;
  }
  } else {
    return props.children;
  }
}



