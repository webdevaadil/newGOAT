import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import Home from "./components/Main/Home";
import { Login } from "./components/Login/Login";
import { PaymentMethoad } from "./components/Profile/PaymentMethoad";
import { Profile } from "./components/Profile/Profile";
import { AccountSetting } from "./components/Profile/AccountSetting";
import { About } from "./components/Profile/About";
import { Dashboard } from "./components/Profile/Dashboard";
import { Thoroughbreds } from "./components/Main/Thoroughbreds";
import { Greyhounds } from "./components/Main/Greyhounds";
import { HorseDetails } from "./components/Main/HorseDetails";
import { Greydetails } from "./components/Main/Greydetails";
import { Metadata } from "./components/layout/Metadata";
import { Package } from "./components/Signup/Package";

// import { ProtectedRoute } from "./components/Route/ProtectedRoute";
import { Multilf } from "./multi/Multilf";
import { Thankyou } from "./components/Extra/Thankyou";
import { useDispatch, useSelector } from "react-redux";
import { loaduser } from "./actions/userAction";
import { Paypa } from "./multi/Stepform/Password";
import { Paymentexpirepage } from "./components/Extra/Paymentexpirepage";
import { Aboutus } from "./components/Extra/About";
import { Checkout } from "./multi/Stepform/Checkout";
import { NewLogin } from "./components/Login/NewLogin";

function App() {
  const dispatch = useDispatch();
  dispatch(loaduser());
  // useEffect(() => {
  //   let url = window.location.href;
  //   console.log('hi');
  //   if (url.indexOf('//www.thegoatstips') < 0 && url.indexOf('thegoatstips') >= 0) {
  //     url = url.replace('//thegoatstips', '//www.thegoatstips')
  //     window.location.href = url;
  //   }
  // }, []);
  return (
    <>
      <Metadata title="The GOAT's Tips - Back a Winner!" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route index path="/The-Goat-Tips" element={<Main />} />
            <Route path="/signup" element={<Multilf />} />
            <Route path="/login" element={<Login />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/thoroughbreds" element={<Thoroughbreds />} />
            <Route path="/greyhounds" element={<Greyhounds />} />
            <Route
              path="/horsedetails/:id/:location"
              element={<HorseDetails />}
            />
            <Route
              path="/greydetails/:id/:location"
              element={<Greydetails />}
            />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<Profile />} />
              <Route path="Package" element={<PaymentMethoad />} />
              <Route path="changepassword" element={<AccountSetting />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="/terms-and-conditions" element={<Aboutus />} />
            <Route path="/packages" element={<Package />} />
            <Route path="/pac" element={<Multilf />} />
            <Route path="/Subscribe/:tips" element={<Paypa />} />
            <Route path="/Subscribe" element={<Paypa />} />
            <Route path="/subscriptionexpire" element={<Paymentexpirepage />} />
            <Route path="/checkout/:tips" element={<Checkout />} />
            <Route path="/newlogin/:tips" element={<NewLogin />} />

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
export function ProtectedRoute(props) {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  if (isAuthenticated === "false") {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
}
export function Paymentroute(props) {
  const { user } = useSelector((state) => state.user);
  if (user) {
    if (user.paymentstatus === "true") {
      return <Navigate to="/main" />;
    }
  } else {
    return props.children;
  }
}
