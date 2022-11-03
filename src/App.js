import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="App">
      <Header logo="Logo" />
      <Video />
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
