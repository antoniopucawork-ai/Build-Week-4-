import { Outlet, useLocation } from "react-router-dom"
import Navigation from "./navigation/Navigation"
import Footer from "./footer/Footer"

const Layout = () => {
  const { pathname } = useLocation()
  const section = pathname.split("/")[1]

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <main key={section} className="page-enter flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
