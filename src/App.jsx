import "./App.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
