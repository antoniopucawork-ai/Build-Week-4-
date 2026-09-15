import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Dropdown, Offcanvas } from "react-bootstrap"
import {
  ArrowLeft,
  Bell,
  BriefcaseBusiness,
  ChevronDown,
  CircleUserRound,
  Grip,
  House,
  MessageSquareMore,
  Search,
  Settings,
  Users,
} from "lucide-react"
import logo from "../../../assets/logo/faviconLogo.png"
import { getMyProfile } from "../../../api/strive"
import "./css/Navigation.css"

const navItems = [
  {
    to: "/", label: "Home",
    Icon: House
  },
  {
    to: "/network",
    label: "My Network",
    Icon: Users
  },
  {
    to: "/jobs",
    label: "Jobs",
    Icon: BriefcaseBusiness
  },
  {
    to: "/messaging",
    label: "Messaging",
    Icon: MessageSquareMore,
    unread: true },
  {
    to: "/notifications",
    label: "Notifications",
    Icon: Bell,
    unread: true },
]

const businessApps = ["Find Leads", "Groups", "Services Marketplace"]

const businessExplore = [
  "Hire on LinkedIn",
  "Sell with LinkedIn",
  "Post a job for free",
  "Advertise on LinkedIn",
  "Get started with Premium",
  "Learn with LinkedIn",
  "Admin Center",
  "Create a Company Page +",
]

const Avatar = ({ profile, size }) => {
  if (!profile?.image) 
    return <CircleUserRound size={size} strokeWidth={1.5} />
  return (
    <img
      src={profile.image}
      alt={`${profile.name} ${profile.surname}`}
      className="li-nav__avatar"
      width={size}
      height={size}
    />
  )
}

const Navigation = () => {
  const [profile, setProfile] = useState(null)
  const [profileError, setProfileError] = useState(false)
  const [showBusiness, setShowBusiness] = useState(false)
  const [readItems, setReadItems] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const { pathname } = useLocation()
  const menuRef = useRef(null)
  const indicatorRef = useRef(null)
  const searchInputRef = useRef(null)
  const searchToggleRef = useRef(null)
  const isProfilePage = pathname === "/profile" || pathname.startsWith("/profile/")


  const closeSearch = () => { // Il pannello diventa statica alla chiusura
    setShowSearch(false)
    searchToggleRef.current?.focus({ preventScroll: true })
  }

  const markAsRead = (to) => {
    if (!readItems.includes(to)) setReadItems([...readItems, to])
  }

  useEffect(() => {
    getMyProfile()
      .then(setProfile)
      .catch((err) => {
        console.error(err)
        setProfileError(true)
      });
  }, [])


  useLayoutEffect(() => { // Fa scorrere la sottolineatura fino al link attivo e la mantiene visibile su dispositivi mobili.
    const menu = menuRef.current
    const indicator = indicatorRef.current

    const moveIndicator = () => {
      const active = menu.querySelector(".li-nav__item.active")
      indicator.classList.toggle("is-visible", Boolean(active))
      if (!active) return


      const { left, width } = active.getBoundingClientRect() // Misurato rispetto alla link row
      const x = left - menu.getBoundingClientRect().left + menu.scrollLeft // dato che l'elemento di attivazione "Me" si trova all'interno di un wrapper `.dropdown` posizionato
      indicator.style.transform = `translateX(${x}px) scaleX(${width})`
    }

    if (indicator.dataset.ready) {
      moveIndicator()
    } else {
      indicator.style.transition = "none"
      moveIndicator()
      indicator.getBoundingClientRect()
      indicator.style.transition = ""
      indicator.dataset.ready = "true"
    }

    const active = menu.querySelector(".li-nav__item.active")
    if (active && menu.scrollWidth > menu.clientWidth) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      active.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest", inline: "nearest" })
    }

    let frame = 0 // Le larghezze dei link cambiano solo con il viewport
    const handleResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(moveIndicator)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(frame)
    }
  }, [pathname])

  useEffect(() => {
    if (showSearch) searchInputRef.current.focus({ preventScroll: true })
  }, [showSearch])

  return (
    <header className="li-nav">
      <div className="li-nav__inner">
        <Link to="/" className="li-nav__logo">
          <img src={logo} alt="LinkedIn" width={34} height={34} />
        </Link>

        <form className="li-nav__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <Search size={16} className="li-nav__search-icon" />
          <input type="search" placeholder="Search" aria-label="Search" />
        </form>

        <button
          type="button"
          className="li-nav__icon-btn li-nav__search-toggle"
          ref={searchToggleRef}
          aria-label="Open search"
          aria-expanded={showSearch}
          onClick={() => setShowSearch(true)}
        >
          <Search 
          size={24} 
          strokeWidth={2.5} 
          />
        </button>

        <nav className="li-nav__menu" ref={menuRef}>
          {navItems.map(({ to, label, Icon, unread }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => unread && markAsRead(to)}
              className={({ isActive }) => `li-nav__item${isActive ? " active" : ""}`}
            >
              <span className="li-nav__icon">
                <Icon size={24} />
                {unread && (
                  <span className={`li-nav__dot${readItems.includes(to) ? " is-read" : ""}`} />
                )}
              </span>
              <span className="li-nav__label">{label}</span>
            </NavLink>
          ))}

          <Dropdown className="li-nav__dropdown">
            <Dropdown.Toggle
              as="button"
              type="button"
              className={`li-nav__item${isProfilePage ? " active" : ""}`}
            >
              <span className="li-nav__icon">
                <Avatar profile={profile} size={24} />
              </span>
              <span className="li-nav__label">
                Me <ChevronDown size={16} className="li-nav__chevron" />
              </span>
            </Dropdown.Toggle>

            {/* Responsive align makes react-bootstrap skip Popper, so the menu is positioned in CSS */}
            <Dropdown.Menu align={{ sm: "end" }} className="li-nav__me-menu">
              <div className="li-nav__me-header">
                <Avatar profile={profile} size={56} />
                <div>
                  
                  <div className="li-nav__me-name">
                    {profile
                      ? `${profile.name} ${profile.surname}`
                      : profileError
                        ? "Profile unavailable"
                        : "Loading..."
                    }
                  </div>
                  <div className="li-nav__me-title">
                    {profile?.title}
                  </div>

                </div>
              </div>
              <div className="px-2 pb-2">
                <Dropdown.Item as={Link} to="/profile" className="li-nav__me-view">
                  View Profile
                </Dropdown.Item>
              </div>
              <Dropdown.Divider />
              <Dropdown.Header>Account</Dropdown.Header>
              <Dropdown.Item as="button">Settings &amp; Privacy</Dropdown.Item>
              <Dropdown.Item as="button">Help</Dropdown.Item>
              <Dropdown.Item as="button">Language</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Manage</Dropdown.Header>
              <Dropdown.Item as="button">Posts &amp; Activity</Dropdown.Item>
              <Dropdown.Item as="button">Job Posting Account</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as="button">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="li-nav__business">
            <button
              type="button"
              className="li-nav__item"
              aria-expanded={showBusiness}
              onClick={() => setShowBusiness(true)}
            >
              <span className="li-nav__icon">
                <Grip size={24} />
              </span>
              <span className="li-nav__label">
                For Business <ChevronDown size={16} className="li-nav__chevron" />
              </span>
            </button>

            <a href="#" className="li-nav__item li-nav__premium" onClick={(e) => e.preventDefault()}>
              <span className="li-nav__icon">
                <span className="li-nav__premium-icon" />
              </span>
              <span className="li-nav__label">Try Premium for €0</span>
            </a>
          </div>

          <span className="li-nav__indicator" ref={indicatorRef} aria-hidden="true" />
        </nav>
      </div>

      <div className={`li-nav__mobile-search${showSearch ? " is-open" : ""}`} inert={!showSearch}>
        <button
          type="button"
          className="li-nav__icon-btn"
          aria-label="Close search"
          onClick={closeSearch}
        >
          <ArrowLeft size={24} />
        </button>
        <form role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchInputRef}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onKeyDown={(e) => e.key === "Escape" && closeSearch()}
          />
        </form>
        <button type="button" className="li-nav__icon-btn" aria-label="Search settings">
          <Settings size={24} />
        </button>
      </div>

      <Offcanvas
        show={showBusiness}
        onHide={() => setShowBusiness(false)}
        placement="end"
        className="li-business"
        backdropClassName="li-business-backdrop"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>For Business</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="li-business__section">
            <h2 className="li-business__heading">My Apps</h2>
            {businessApps.map((app) => (
              <button key={app} type="button" className="li-business__link">
                {app}
              </button>
            ))}
          </div>
          <div className="li-business__section">
            <h2 className="li-business__heading">Explore more for business</h2>
            {businessExplore.map((item) => (
              <button key={item} type="button" className="li-business__link">
                {item}
              </button>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  )
}

export default Navigation
