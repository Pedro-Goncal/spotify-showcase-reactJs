import React from "react";
import { useStateValue } from "../../context/StateProvider";

//Style
import "./Header.css";

//@material-Ui
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0].url} alt="PG" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
