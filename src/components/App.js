import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext.";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import SignUp from "../pages/SignUp";
import "../style/App.css";
import PrivateRoute from "./PrivateRoute";

const NotFound = () => {
  return <h3>404 Not Found</h3>;
};

const Test = () => {
  return <h3>Test page</h3>;
};

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/result/:id" element={<Result />} />
          <Route path="/quiz/:id" element={<PrivateRoute />}>
            <Route path="/quiz/:id" element={<Quiz />} />
          </Route>
          <Route element={<NotFound />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
