import React from "react";

function UndoRedo({ handleUndo, handleRedo }) {
  return (
    <div className="undo-redo-btn">
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
}

export default UndoRedo;
