import "./App.css";
import Home from "./pages/Home";
import "./pages/Home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* AIzaSyDeKrEIjOconNsheBZtSb5_tXvtlu7eUWc */}
        {/* <GlobalProvider> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/search" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
