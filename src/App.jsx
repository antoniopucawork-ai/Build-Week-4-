import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ExperienceDetailsPage from "./pages/profile/ExperienceDetailsPage";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notfound/NotFound";
import MainSection from "./components/main/mainsection/MainSection";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainSection />} />

          <Route path="/profile/:id?" element={<Profile />} />

          <Route path="/details/experience" element={<ExperienceDetailsPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
