import "./App.css";
import CategoriesHeader from "./components/CategoriesHeader/CategoriesHeader";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoriesHeader />
      <Home />
    </div>
  );
}

export default App;
