import React from "react";

function PanelImputs(props) {
  const {
    handleChange,
    handleOnKeyUp,
    handleOptionChange,
    putInHistory,
    toggleInput,
    output,
    input,
    params,
  } = props;

  return (
    <>
      <div className="panel">
        <h2 className="panel__title">Convert</h2>
        <div className="panel__inputs">
          <select
            id="options"
            className="panel__inputs-input"
            onChange={handleOptionChange}
            value={params.option}
          >
            <option value="1">km → miles</option>
            <option value="2">miles → km</option>
            <option value="3">metres → feet</option>
            <option value="4">feet → metres</option>
            <option value="5">cm → inches</option>
            <option value="6">inches → cm</option>
          </select>
          <label
            htmlFor="options"
            className="panel__inputs-label"
            onClick={() =>
              toggleInput({
                input,
                output,
                params,
              })
            }
          >
            ⇆
          </label>
        </div>
        <div className="panel__inputs">
          <input
            type="number"
            className="panel__inputs-input"
            id="inputValue"
            onKeyUp={handleOnKeyUp}
            onChange={handleChange}
            value={input || ""}
          />
          <label htmlFor="inputValue" className="panel__inputs-label">
            {params.unitInput}
          </label>
        </div>
        <div className="panel__output">
          <span onClick={() => putInHistory({ input, output, params })}>❤</span>
          <p>{`${output || ""} ${input !== "" ? params.unitOutput : ""}`}</p>
        </div>
      </div>
    </>
  );
}

export default PanelImputs;