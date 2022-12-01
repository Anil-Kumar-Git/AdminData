import 'react-toastify/dist/ReactToastify.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layouts/Main/Layout";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard/Main";
// import Error from "./Pages/Users/Error";
import Footer from "./Layouts/Footer/Footer";
import ProtectedComponent from "./Routes/protectedRoutes";
import PrivetComponent from "./Routes/privetRoute";
import ResetPwd from "./Pages/ResetPwd";
// import List from "./Pages/Users/List";
import MyProfile from "./Pages/Profile/MyProfile";
// import ContactUsers from "./Pages/Users/ContactUsers";
// import ValidateForm from "./Pages/ValidateForm";
import VerifyEmail from './Pages/verifyEmail';
import ForgetPwd from './Pages/forgetPwd';
import Users from './Pages/Users';

function App() {
  const [login, setLogin] = useState(false);
  const showLayout = (event) => {
    setLogin(event);
  };

  const isNotAuthenticated = (pageComponent) => {



    
    const token = localStorage.getItem('token')
  
    if (token) {
      return <Navigate to={{ pathname: '/login' }} />
    }
    return pageComponent
  }
  const isAuthenticated = (pageComponent) => {
    const token = localStorage.getItem('token')
  
    if (!token) {
      return <Navigate to={{ pathname: '/' }} />
    }
    return pageComponent
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedComponent />}>
            <Route path="/login" element={<Login />} />
            <Route path="/forget-pwd" element={<ForgetPwd />} />
            <Route path="/verify-email/:email/:verifyId" element={<VerifyEmail />} />
            {/* <Route path="/reset-password/:token" element={<ResetPwd />} /> */}
            <Route path="/reset-password" element={<ResetPwd />} />
          </Route>
          <Route element={<Layout />}>
            <Route element={<PrivetComponent />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path='/list' element={<Users/>} />
            </Route>
          </Route>
          <Route path="/*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
