import { Dropdown } from "react-bootstrap"
import { CaretIcon, HelpIcon, SettingsIcon, ShieldIcon } from "./FooterIcons"
import "./css/Footer.css"

const PRIVACY_TERMS = "Privacy & Terms"

const linkColumns = [
  [
    "About",
    "Community Guidelines",
    PRIVACY_TERMS,
    "Sales Solutions",
    "Safety Center",
  ],
  ["Accessibility", "Careers", "Ad Choices", "Mobile"],
  ["Talent Solutions", "Marketing Solutions", "Advertising", "Small Business"],
];

const privacyTerms = [
  "Privacy Policy",
  "User Agreement",
  "Pages Terms",
  "Cookie Policy",
  "Copyright Policy",
];

const helpItems = [
  {
    Icon: HelpIcon,
    title: "Questions?",
    text: "Visit our Help Center.",
  },
  {
    Icon: SettingsIcon,
    title: "Manage your account and privacy",
    text: "Go to your Settings.",
  },
  {
    Icon: ShieldIcon,
    title: "Recommendation transparency",
    text: "Learn more about Recommended Content.",
  },
];

const languages = [
  "العربية (Arabic)",
  "Čeština (Czech)",
  "Dansk (Danish)",
  "Deutsch (German)",
  "English (English)",
  "Español (Spanish)",
  "Français (French)",
  "हिंदी (Hindi)",
  "Italiano (Italian)",
  "日本語 (Japanese)",
  "한국어 (Korean)",
  "Nederlands (Dutch)",
  "Polski (Polish)",
  "Português (Portuguese)",
  "Русский (Russian)",
  "Svenska (Swedish)",
  "Türkçe (Turkish)",
  "简体中文 (Chinese (Simplified))",
];

const preventNav = (e) => e.preventDefault(); // I link non hanno ancora una pagina

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="li-footer">
      <div className="li-footer__inner">
        <div className="li-footer__links">
          {linkColumns.map((column) => (
            <ul key={column[0]} className="li-footer__column">
              {column.map((label) => (
                <li key={label}>
                  {label === PRIVACY_TERMS ? (
                    <Dropdown>
                      <Dropdown.Toggle
                        as="button"
                        type="button"
                        className="li-footer__link"
                      >
                        {label}{" "}
                        <CaretIcon
                          width={10}
                          height={5}
                          className="li-footer__caret"
                        />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="li-footer__menu">
                        {privacyTerms.map((item) => (
                          <Dropdown.Item key={item} as="button">
                            {item}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <a
                      href="#"
                      className="li-footer__link"
                      onClick={preventNav}
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <p className="li-footer__copyright">LinkedIn Corporation &copy; {year}</p>

        <div className="li-footer__bottom">
          <ul className="li-footer__help">
            {helpItems.map(({ Icon, title, text }) => (
              <li key={title} className="li-footer__help-item">
                <Icon className="li-footer__help-icon" />
                <div>
                  <a
                    href="#"
                    className="li-footer__help-title"
                    onClick={preventNav}
                  >
                    {title}
                  </a>
                  <p className="li-footer__help-text">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="li-footer__language">
            <label
              htmlFor="li-footer-language"
              className="li-footer__language-label"
            >
              Select language
            </label>
            <div className="li-footer__select-wrap">
              <select
                id="li-footer-language"
                className="li-footer__select"
                defaultValue="English (English)"
              >
                {languages.map((language) => (
                  <option key={language}>{language}</option>
                ))}
              </select>
              <CaretIcon
                width={14}
                height={7}
                className="li-footer__select-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
