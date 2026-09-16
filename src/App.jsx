import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notfound/NotFound";
import HeroCard from "./components/main/mainsection/HeroCard/HeroCard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HeroCard />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
