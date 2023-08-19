import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export const Topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft"></div>
        <div className="topbarCenter"></div>
        <div className="topbarRight"></div>

    </div>
  )
}
