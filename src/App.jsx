import "./App.css";
import UndoRedo from "./components/UndoRedo";
import Counter from "./components/Counter";
import History from "./components/History";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoList, setRedoList] = useState([]);
  const [undoCount, setUndoCount] = useState(0);

  // Maintain History
  const maintainHistory = (key, prev, curr) => {
    // console.log(key, prev, curr);
    const obj = {
      action: key,
      prev,
      curr,
    };

    const copyHistory = [...history];
    copyHistory.unshift(obj);
    setHistory(copyHistory);
  };

  // handle Count
  const handleCount = (e) => {
    const id = e.target.id;
    if (id === "addOne") {
      setCount(count + 1);
    } else if (id === "addTen") {
      setCount(count + 10);
    } else if (id === "addHund") {
      setCount(count + 100);
    } else if (id === "subOne") {
      setCount(count - 1);
    } else if (id === "subTen") {
      setCount(count - 10);
    } else if (id === "subHund") {
      setCount(count - 100);
    }
    const val = parseInt(e.target.innerText);
    maintainHistory(val, count, count + val);
    setUndoCount(0);
  };

  // handle Undo Button
  const handleUndo = () => {
    // Stack LIFO
    if (history.length) {
      if (undoCount + 1 > 5) {
        alert("you can not undo beyond limit=5");
        return;
      }
      const copyHist = [...history];
      const firstItem = copyHist.shift();
      setHistory(copyHist);
      setCount(firstItem.prev);

      const copyRedoList = [...redoList];
      copyRedoList.push(firstItem);
      setRedoList(copyRedoList);
    }
    setUndoCount(undoCount + 1);
  };

  // handle Redo Button
  const handleRedo = () => {
    if (redoList.length) {
      const copyRedoList = [...redoList];
      const lastItem = copyRedoList.pop();
      setRedoList(copyRedoList);
      const { action, prev, curr } = lastItem;
      setCount(curr);
      maintainHistory(action, prev, curr);
    }
  };
  return (
    <>
      <div>
        <h1>Undoable Counter</h1>
        <UndoRedo handleRedo={handleRedo} handleUndo={handleUndo}></UndoRedo>
        <Counter
          count={count}
          setCount={setCount}
          handleCount={handleCount}
        ></Counter>
        <History history={history}></History>
      </div>
    </>
  );
}

export default App;
