import { useLoaderData } from "react-router-dom";
import CoffeCard from "./components/CoffeCard";
import { useState } from "react";

function App() {
  const loadedAllCoffee = useLoaderData();
  console.log(loadedAllCoffee);
  const [allCoffee, setAllCoffe] = useState(loadedAllCoffee);
  return (
    <>
      <h1 className="text-6xl text-purple-600">
        All Coffees in here : {allCoffee.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-2">
        {allCoffee.map((coffee) => (
          // <h2>{c.coffeeName}</h2>
          <CoffeCard
            key={coffee._id}
            coffee={coffee}
            allCoffee={allCoffee}
            setAllCoffe={setAllCoffe}
          ></CoffeCard>
        ))}
      </div>
    </>
  );
}

export default App;
