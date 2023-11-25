import Header from "./components/Layout/Header/Header";
import TireCalculator from "./components/TireCalculator/TireCalculator";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Header />
      <TireCalculator />
    </div>
  );
}

export default App;
