import React from "react";
import Button from "./Button";
import { useLocation } from "react-router";

const Header = ({ title, onAdd, showTask }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname == "/" && (
        <Button
          text={showTask ? "Close" : "Add"}
          color={showTask ? "black" : "green"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
