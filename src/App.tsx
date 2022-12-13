import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Main from "./Main";
import Competences from "./pages/Competences";
import Snapshot from "./pages/Snapshot";
import Career from "./pages/Career";

const App = () => (
  <>
    <Routes>
      <Route path="/">
        <Route index element={<About />} />
        <Route path="competences" element={<Competences />} />
        <Route path="snapshot" element={<Snapshot />} />
        <Route path="career" element={<Career />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
    <Main />
  </>
);

export default App;
