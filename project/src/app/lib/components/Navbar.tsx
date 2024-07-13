import { NavLink } from "./NavLink";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar has-background-dark">
        <NavLink className = "navbar-item is-color-white" href="/">Home</NavLink>
        <NavLink className = "navbar-item is-color-white" href="/books">Books</NavLink>
        <NavLink className = "navbar-item is-color-white" href="/signup">SignUp</NavLink>
        <NavLink className = "navbar-item is-color-white" href="/login">LogIn</NavLink>
      </nav>
    </>
  );
};
