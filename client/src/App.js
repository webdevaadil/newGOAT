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
import { useSelector } from "react-redux";
import { Aboutus } from "./components/extra/About";

// import { ProtectedRoute } from "./components/Route/ProtectedRoute";
import { Multilf } from "./multi/Multilf";
import { Thankyou } from "./components/Profile/Thankyou";

function App() {
  return (
    <>
      <Metadata title="The Goat Tips" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/main" element={<Main />} />
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
          {/* <Route element={<RequireAuth />}> */}
          <Route path="/thankyou" element={<Thankyou />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
export function ProtectedRoute(props) {
  const { user } = useSelector((state) => state.user);

  if (user) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
