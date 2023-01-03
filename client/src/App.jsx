import Header from "./components/header"
import News from "./components/news"
import Learn from "./components/learn"
import "./css/main.css"
import "./css/news.css"
import "./css/header.css"
import "./css/learn.css"

function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <Learn/>
    </div>
  );
}

export default App;
