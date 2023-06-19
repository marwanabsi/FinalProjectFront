import React, { useState } from "react";
import "../App.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

function AccountCirclePopup({ handleClose, handleLogout }) {
  return (
    <div className="AccountCirclePopup">
      
      <p>Have a nice day </p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}

function TopBar() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="TopBar">
      <div className="ProfileDiv">
        <AccountCircleIcon onClick={handleOpenPopup} />
        {isPopupOpen && (
          <AccountCirclePopup
            handleClose={handleClosePopup}
            handleLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
}

export default TopBar;
