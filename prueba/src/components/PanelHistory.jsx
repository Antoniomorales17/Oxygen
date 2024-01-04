import React from "react";

function PanelHistory(props) {
  // Desestructuración de las props para acceder a history y deleteItem
  const { history, deleteItem } = props;

  return (
    <>
      <h3 className="savedTitle">Saved</h3>
      <div className="historyContainer">
        {/* Mapeo a través del historial para renderizar cada elemento */}
        {history.map((item, index) => {
          return (
            // Elemento individual en el historial
            <div key={index} className="history">
              <p className="history__items">
                {item.input} {item.params.unitInput} → {item.output}{" "}
                {item.params.unitOutput}
              </p>
              <span onClick={() => deleteItem(index)}>×</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PanelHistory;
