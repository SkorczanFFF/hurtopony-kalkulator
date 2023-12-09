import Header from "./components/Layout/Header/Header";
import TireCalculator from "./components/TireCalculator/TireCalculator";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      {" "}
      <Analytics />
      <Header />
      <TireCalculator />
    </div>
  );
}

export default App;
