import React, { useContext } from "react";
import { NavContext } from "../context/NavContext";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

export const textTrackIn = keyframes` 
     0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
`;

export const NavBarButton = styled(Button)(() => ({
  flexGrow: 1,
  "&:hover": {
    animation: `${textTrackIn}  0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`
  }
}));

const NavLink = (props: { page: any }) => {
  const { page } = props;
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    console.log("page", page);
    setActiveNavLinkId(page.menuTitle);
    document!.getElementById(page!.pageURL)!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavBarButton
      id={page.menuTitle}
      className={activeNavLinkId === page.menuTitle ? "activeClass" : ""}
      href={page.pageURL}
      color="inherit"
      onClick={handleClick}
    >
      {page.menuTitle}
    </NavBarButton>
  );
};

export default NavLink;
