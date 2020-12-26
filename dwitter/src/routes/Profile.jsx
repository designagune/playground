import { authService } from "fbInstance";
import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const histroy = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    histroy.push("/");
  };

  return (
    <>
      <button onClick={onLogOutClick}>LogOut</button>
    </>
  );
};
