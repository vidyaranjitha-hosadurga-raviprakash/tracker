import React from "react";
import { Popover as MuiPopover } from "@mui/material/";

export const Popover = ({
  showPopOver,
  setShowPopOver,
  anchorOrigin,
  transformOrigin,
  children,
  anchorPosition,
}) => {
  const handlePopoverClose = () => {
    setShowPopOver(null);
  };

  const open = Boolean(showPopOver);

  return (
    <div>
      <MuiPopover
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        onClose={handlePopoverClose}
        anchorReference="anchorPosition"
        anchorPosition={anchorPosition}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        disableRestoreFocus
      >
        {children}
      </MuiPopover>
    </div>
  );
};
