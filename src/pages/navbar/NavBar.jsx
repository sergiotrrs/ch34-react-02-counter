import { Link } from "react-router-dom"


export const NavBar = () => {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">AboutUs</Link>
            {/* <a href="/about-us"  > About Us  </a> */}
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>                    
        </ul>
      </nav>
    </div>
  )
}
