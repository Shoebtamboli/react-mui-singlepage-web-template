import { Tooltip } from "@mui/material";
import React from "react";

type ToolTipProps = {
  children: React.ReactElement<any, any>;
  title?: string;
};

export const ToolTip = (props: ToolTipProps) => {
  const { children, title } = props;

  return (
    <Tooltip
      title={title == null ? children.props["aria-label"] : title}
      placement="bottom"
      enterDelay={500}
      {...props}
    >
      {children}
    </Tooltip>
  );
};
