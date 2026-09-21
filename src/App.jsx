import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notfound/NotFound";
import MainSection from "./components/Main/mainsection/MainSection";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainSection />} />

          <Route path="/profile/:id?" element={<Profile />} />


          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
