import { MouseEventHandler, ReactNode } from "react";

export const Title = (props: { children: ReactNode; className?: string }) => {
  <h1 className={props.className ? props.className : ""}>{props.children}</h1>;
};

export const Button = (props: {
  title: string;
  color?: "red" | "blue" | "transparent";
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`btn ${props.color ? props.color : "transparent"}`}
      onClick={props.onClick}
    >
      <span>{props.title}</span>
    </button>
  );
};
