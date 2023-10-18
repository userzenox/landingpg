import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav> 
          
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="Work" >Work</NavLink>

          <NavLink to="Contact" >Contact</NavLink>
          <NavLink to="Footer" > Footer </NavLink> 
          <NavLink to="Login" ><button className="primary-button"> LogIn</button></NavLink>

        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
