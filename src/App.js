import IntroPage from "./features/IntroPage";
import LoginPage from "./features/Auth/LoginPage";
import { selectIsAuthenticated } from "./features/Auth/authSlice";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import DashboardPage from "./features/DashboardPage"
import {Provider, useSelector} from 'react-redux'
import store from "./app/store";


function PrivateRoute({children}) {
  const authenticated = useSelector(selectIsAuthenticated);
  return authenticated ? <>{children}</> : <Navigate to="/login" />
};

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>}/>
        {/* <Navigate from='/' to='/dashboard' /> */}
        <Route path="/" element={<IntroPage/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
