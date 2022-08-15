import React from "react";
import styled from "styled-components";
import { NoteType } from "./helpers";
import Note from "./Note";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

type Props = {
  notes: NoteType[];
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Octave: React.FC<Props> = ({ notes, clickHandler }) => (
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
