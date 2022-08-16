import React, { FC } from "react";
import { NoteType } from "./helpers";
import Note from "./Note";
import { Wrapper } from "./keys";

type Props = {
  notes: NoteType[];
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Octave: FC<Props> = ({ notes, clickHandler }) => (
  <Wrapper>
    <div>
      {notes.map((element: NoteType) => (
        <Note
          key={element.note}
          color={element.color}
          note={element.note}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  </Wrapper>
);

export default Octave;
