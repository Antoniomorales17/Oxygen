import PanelContainer from "./components/PanelContainer";

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <h1 className="title">⇆ Unit converter</h1>
        </header>
        <main>
          <PanelContainer />
        </main>
        <footer>
          <div>
            <p>Terms of service</p>
            <p>Privacy policy</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;