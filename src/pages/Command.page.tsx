import { observer } from "mobx-react";

import { Canvas } from "../canvas/Canvas";
import { HandwrittenNoteWithCommand } from "../HandwrittenNote/HandwrittenNoteWithCommand";
import { HandwrittenNoteWithStrategy } from "../HandwrittenNote/HandwrittenNoteWithStrategy";

export const CommandPage = observer(() => {

  return (
    <>
      <Canvas />
      <HandwrittenNoteWithCommand />
      <HandwrittenNoteWithStrategy />
    </>
  );
});
