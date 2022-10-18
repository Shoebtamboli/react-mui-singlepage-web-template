//props.threshold     : threshold for scroll event to hide component.

import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";

interface Props {
  threshold?: number;
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollToFade(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  return <Fade in={trigger}>{children}</Fade>;
}

export default ScrollToFade;
