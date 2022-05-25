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

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/quiz" element={<PrivateRoute />}>
            <Route exact path="/quiz" element={<Quiz />} />
          </Route>
          <Route path="/quiz/:id" element={<PrivateRoute />}>
            <Route path="/quiz/:id" element={<Quiz />} />
          </Route>
          <Route path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
