import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Plus from "../assets/add.svg";

import Button from "./Button";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

function Header() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  return (
    <header className="flex items-center justify-between mx-auto max-w-screen">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-10" />
      </Link>

      <div className="flex space-x-6">
        <Button type="secondary" onClick={() => setIsModalOpen(!isModalOpen)}>
          თანამშრომლის შექმნა
        </Button>
        <NavLink to="create">
          <Button>
            <img src={Plus} />
            შექმენით ახალი დავალება
          </Button>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
