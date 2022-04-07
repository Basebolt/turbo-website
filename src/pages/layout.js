import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Navbar } from "../components/Navbar";

export default function Layout() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <Navbar
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
      />
      {isMenuVisible && <Menu setIsMenuVisible={setIsMenuVisible} />}
      <Outlet />
    </>
  );
}
