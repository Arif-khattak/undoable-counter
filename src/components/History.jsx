import React from "react";

function History({ history }) {
  //   console.log(history);

  return (
    <div className="history">
      {history.map((item) => {
        return (
          <div className="maintain-history">
            <p> {item.action}</p>
            <p> {item.prev}</p>
            <p> {item.curr}</p>
          </div>
        );
      })}
    </div>
  );
}

export default History;
