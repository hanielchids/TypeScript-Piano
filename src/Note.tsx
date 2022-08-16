import React, { FC } from "react";
import { White, Black } from "./keys";

type Props = {
  color: string;
  note: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Note: FC<Props> = ({ color, note, clickHandler }) =>
  color === "white" ? (
    <White value={note} onClick={clickHandler} />
  ) : (
    <Black value={note} onClick={clickHandler} />
  );
export default Note;
