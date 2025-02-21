import { useEffect } from "react";
import "./App.css";

#3498DB
#2ECC71
#7F8C8D
function Example() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("Resized!");
    });

    return () => {
      window.removeEventListener("resize", () => {
        console.log("Removed!");
      });
    };
  }, []);

  return <h1>salam world!</h1>;
}

function App() {
  return (
    <div>
      <Example />
    </div>
  );
}

export default App;
