import { useState } from 'react'
import { Menu, Close } from './Icons.jsx'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#how', label: 'How it works' },
  { href: '#stories', label: 'Stories' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container">
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="Brightside Support home">
            <span className="brand-mark" aria-hidden="true" />
            Brightside Support
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <a className="btn btn-primary nav-cta" href="#contact">Book a free chat</a>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav id="mobile-menu" className="nav-mobile" aria-label="Mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>Book a free chat</a>
          </nav>
        )}
      </div>
    </header>
  )
}
