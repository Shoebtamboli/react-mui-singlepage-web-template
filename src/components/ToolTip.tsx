import { Tooltip } from "@mui/material";
import React from "react";

type ToolTipProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactElement<any, any>;
  title?: string;
};

export const ToolTip = (props: ToolTipProps) => {
  const { children, title } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
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
