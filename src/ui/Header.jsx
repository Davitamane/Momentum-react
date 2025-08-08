import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Plus from "../assets/add.svg";

import Button from "./Button";

function Header() {
  return (
    <header className="flex items-center justify-between mx-auto max-w-screen">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-10" />
      </Link>

      <div className="flex space-x-6">
        <Button type="secondary">თანამშრომლის შექმნა</Button>
        <NavLink to="create">
          <Button>
            <img src={Plus} />
            {"     "} შექმენით ახალი დავალება
          </Button>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
