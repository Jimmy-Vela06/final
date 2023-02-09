import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button class="ui primary basic button" onClick={() => navigate(-1)}>
            Go To homepage
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
