import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNavigation, setSelectedNavigation] = useState<number | null>(
    null
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const routes = ["/", "/catalog", "/contact"];
    const currentPath = location.pathname;
    const index = routes.indexOf(currentPath);
    setSelectedNavigation(index !== -1 ? index : null);
  }, [location.pathname]);

  const handleNavigation = (index: number) => {
    const routes = ["/", "/catalog", "/contact"];
    setSelectedNavigation(index);
    navigate(routes[index]);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className="navigation">
          {["Bienvenido", "Catalogo", "Contacto"].map((label, index) => (
            <div
              key={index}
              className={`navigation-item ${
                selectedNavigation === index ? "selected" : ""
              }`}
              onClick={() => handleNavigation(index)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
