import { useState } from "react";
import "@/App.scss";
import Button from "@/components/Button";
import ButtonNav, { MS } from "@/components/ButtonNav";
const data: MS = [
  { onClick: () => {}, title: "Page1" },
  { onClick: () => {}, title: "Page2" },
  {
    options: [
      { title: "item1", onCLick() {} },
      { title: "item2", onCLick() {} },
      { title: "item3", onCLick() {} },
    ],
    title: "Page3",
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button>Go there...</Button>
        <Button iconPosition="left">Go there...</Button>
        <Button iconPosition="right">Go there...</Button>
        <Button icon="zondicons:play-outline" iconPosition="right">
          Go there...
        </Button>
        <ButtonNav data={data}>Navigation</ButtonNav>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
