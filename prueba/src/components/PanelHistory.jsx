import React from "react";

function PanelHistory(props) {
  // Desestructuración de las props para acceder a history y deleteItem
  const { history, deleteItem } = props;

  return (
    <>
      {/* Encabezado del historial */}
      <h3 className="savedTitle">Saved</h3>

      {/* Contenedor del historial */}
      <div className="historyContainer">
        {/* Mapeo a través del historial para renderizar cada elemento */}
        {history.map((item, index) => {
          return (
            // Elemento individual en el historial
            <div key={index} className="history">
              {/* Texto que muestra la conversión */}
              <p className="history__items">
                {item.input} {item.params.unitInput} → {item.output}{" "}
                {item.params.unitOutput}
              </p>

              {/* Icono de "X" para eliminar la conversión del historial */}
              <span onClick={() => deleteItem(index)}>×</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PanelHistory;
