import { Outlet, useLocation } from "react-router-dom"
import Navigation from "./navigation/Navigation"

const Layout = () => {
  const { pathname } = useLocation()
  const section = pathname.split("/")[1]

  return (
    <>
      <Navigation />
      <main key={section} className="page-enter">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
