import React, { useState, useEffect } from "react";
import { optionParams } from "./optionParams.js";
import "./styles.css";
import PanelImputs from "./PanelImputs";
import PanelHistory from "./PanelHistory";

function Panel() {
  const [output, setOutput] = useState(null);
  const [input, setInput] = useState(null);
  const [params, setParams] = useState(optionParams[0]);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  function handleChange(e) {
    setInput(e.target.value === "" ? null : parseFloat(e.target.value));
  }

  function handleOnKeyUp(e) {
    const inputValue = e.target.value;
    setOutput((inputValue * params.factor).toFixed(2));
  }

  function handleOptionChange(e) {
    const optionSelected = parseInt(e.target.value);
    setInput(null);
    setOutput(null);
    setParams(optionParams[optionSelected - 1]);
  }

  function toggleInput(data) {
    const optionFactor = data.params.option % 2 === 0 ? -1 : 1;
    const newOption = data.params.option + optionFactor;
    setInput(data.output);
    setOutput(data.input);
    setParams(optionParams[newOption - 1]);
  }

  async function putInHistory(result) {
    if (!input || !output) return;
    setHistory([...history, result]);
    setInput(null);
    setOutput(null);
  }

  async function deleteItem(index) {
    const newHistory = [...history];
    newHistory.splice(index, 1);
    setHistory(newHistory);
  }

  function saveHistory(list) {
    localStorage.setItem("history", JSON.stringify(list));
  }

  useEffect(() => {
    saveHistory(history);
  }, [history]);

  return (
    <div className="container">
      <PanelImputs
        handleChange={handleChange}
        handleOnKeyUp={handleOnKeyUp}
        handleOptionChange={handleOptionChange}
        putInHistory={putInHistory}
        toggleInput={toggleInput}
        output={output}
        input={input}
        params={params}
      />
      {history.length !== 0 && (
        <PanelHistory history={history} deleteItem={deleteItem} />
      )}
    </div>
  );
}

export default Panel;
