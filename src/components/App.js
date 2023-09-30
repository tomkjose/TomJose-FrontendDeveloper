import { Home, Landing, SignIn, SignUp, Fof } from "../pages/index";
import { NavbarMenu } from "./NavbarMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../provider/AuthProvider";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <NavbarMenu />
          <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/signin" element={<SignIn />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="*" element={<Fof />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
