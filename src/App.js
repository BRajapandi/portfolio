import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Nav from "./Component/nav/Nav";
import Home from "./Component/home/Home";
import About from "./Component/about/About";
import NotFound from "./Component/notFound/NotFound";
function App() {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 0 });
  }, []);
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Nav />} loader={<div>Loading...</div>}>
        <Route index element={<Home />} loader={<div>Loading...</div>} />
        <Route
          path="home"
          index
          element={<Home />}
          loader={<div>Loading...</div>}
        />
        <Route
          path="about"
          element={<About />}
          loader={<div>Loading...</div>}
        />
        <Route element={<NotFound />} path="*" />
      </Route>
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
