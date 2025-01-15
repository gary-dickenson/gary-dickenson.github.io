import '../styles/Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header id="site-header" className="site-header">
      <div className="container">
        <nav className="navbar">
          <ul className="nav">
            <li>
              <div className="logo">
                <a href="/">
                  <h1>GD Dev Ltd</h1>
                </a>
                <h4>IT Consultancy</h4>
              </div>
            </li>
            <li>
              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
