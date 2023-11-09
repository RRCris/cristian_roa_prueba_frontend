import { useState } from "react";
import "@/App.scss";
import Button from "@/components/Button";
import ButtonNav, { MS } from "@/components/ButtonNav";
import Typografy from "./components/Typografy";
const data: MS = [
  {
    onClick: () => {
      console.log("Page 1");
    },
    title: "Page 1",
  },
  {
    onClick: () => {
      console.log("Page 2");
    },
    title: "Page 2",
  },
  {
    options: [
      {
        title: "item 1",
        onCLick() {
          console.log("item 1");
        },
      },
      {
        title: "item 2",
        onCLick() {
          console.log("item 2");
        },
      },
      {
        title: "item 3",
        onCLick() {
          console.log("item 3");
        },
      },
    ],
    title: "Page 3",
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
        <ButtonNav onClick={() => console.log("Navigation")}>
          Navigation
        </ButtonNav>
        <Typografy variant="TitlePage">hola</Typografy>
        <Typografy variant="SubtitlePage">hola</Typografy>
        <Typografy variant="BodyText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, harum
          fugit, cumque quibusdam molestias consequatur et veniam iusto eum iure
          itaque ipsum officia. Labore quas beatae nulla molestias repudiandae.
          Hic.
        </Typografy>
      </div>
    </>
  );
}

export default App;
