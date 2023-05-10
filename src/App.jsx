import "./App.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
