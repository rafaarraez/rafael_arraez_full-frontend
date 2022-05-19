import React from "react";
import { Button } from "./button-primary-styles";
const ButtonPrimary: React.FC<any> = ({
  text,
  icon,
  color = "var(--primary-yellow)",
  paddingBtn = "20px",
  click,
}: any) => {
  const TheIcon = icon;
  return (
    <Button
      onClick={click}
      color={color}
      style={{ paddingLeft: paddingBtn, paddingRight: paddingBtn }}
    >
      {icon && (
        <span>
          <TheIcon />
        </span>
      )}
      {text}
    </Button>
  );
};

export default ButtonPrimary;
