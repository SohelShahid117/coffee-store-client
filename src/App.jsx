import { useLoaderData } from "react-router-dom";
import CoffeCard from "./components/CoffeCard";

function App() {
  const allCoffee = useLoaderData();
  console.log(allCoffee);
  return (
    <>
      <h1 className="text-6xl text-purple-600">
        All Coffees : {allCoffee.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-2">
        {allCoffee.map((coffee) => (
          // <h2>{c.coffeeName}</h2>
          <CoffeCard key={coffee._id} coffee={coffee}></CoffeCard>
        ))}
      </div>
    </>
  );
}

export default App;
