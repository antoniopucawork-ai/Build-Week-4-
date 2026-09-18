const gearTeeth = [0, 60, 120, 180, 240, 300]

export const HelpIcon = (props) => (
  <svg viewBox="0 0 20 20" width={20} height={20} fill="currentColor" aria-hidden="true" {...props}>
    <defs>
      <mask id="li-footer-help-mask">
        <rect width="20" height="20" fill="#fff" />
        <path d="M6.8 7.5a3.2 3.2 0 0 1 6.4 0c0 1.9-3.2 2.2-3.2 4.3" fill="none" stroke="#000" strokeWidth="2" />
        <circle cx="10" cy="14.9" r="1.25" fill="#000" />
      </mask>
    </defs>
    <circle cx="10" cy="10" r="10" mask="url(#li-footer-help-mask)" />
  </svg>
)

export const SettingsIcon = (props) => (
  <svg viewBox="0 0 20 20" width={20} height={20} fill="currentColor" aria-hidden="true" {...props}>
    <defs>
      <mask id="li-footer-settings-mask" fill="#fff">
        <circle cx="10" cy="10" r="7.5" />
        {gearTeeth.map((angle) => (
          <rect key={angle} x="14" y="7.2" width="6" height="5.6" rx="0.6" transform={`rotate(${angle} 10 10)`} />
        ))}
        <circle cx="10" cy="10" r="3" fill="#000" />
      </mask>
    </defs>
    <rect width="20" height="20" mask="url(#li-footer-settings-mask)" />
  </svg>
)

export const ShieldIcon = (props) => (
  <svg viewBox="0 0 20 20" width={20} height={20} fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M10 0l9 2v7c0 5.5-4 9.2-9 11-5-1.8-9-5.5-9-11V2zm0 2.1L3 3.6V9c0 4.3 3 7.3 7 8.8z"
    />
  </svg>
)

export const CaretIcon = ({ width, height, ...props }) => (
  <svg
    viewBox="0 0 2 1"
    width={width}
    height={height}
    preserveAspectRatio="none"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M0 0h2L1 1z" />
  </svg>
)
