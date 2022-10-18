//props.threshold     : threshold for scroll event to hide component.

import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Grow from "@mui/material/Grow";

interface Props {
  threshold?: number;
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollToGrow(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  return (
    <Grow appear={true} timeout={2000} in={trigger}>
      {children}
    </Grow>
  );
}

export default ScrollToGrow;
