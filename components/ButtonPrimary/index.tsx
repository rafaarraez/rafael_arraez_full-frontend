import React, { MouseEventHandler } from "react";
import { Button } from "./button-primary-styles";

interface IProps {
  text: string,
  icon: string,
  color: string,
  paddingBtn: string,
  click: MouseEventHandler<HTMLButtonElement>,
}

const ButtonPrimary: React.FC<any> = ({
  text,
  icon,
  color = "var(--primary-yellow)",
  paddingBtn = "20px",
  click,
}: IProps) => {
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
