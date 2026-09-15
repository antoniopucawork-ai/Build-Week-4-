import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notfound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route 
          element={<Layout />}
          >
          <Route 
            path="/" 
            element={<Home />} 
          />

          <Route 
            path="/profile" 
            element={<Profile />} 
            />

          <Route 
            path="*" 
            element={<NotFound />} 
            />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
