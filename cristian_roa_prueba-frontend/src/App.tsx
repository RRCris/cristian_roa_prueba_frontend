import "@/App.scss";
import Button from "@/components/Button";
import ButtonNav, { MS } from "@/components/ButtonNav";
import Typografy from "@/components/Typografy";
import CheckBox from "@/components/CheckBox";
import RadioButton from "@/components/RadioButton";
import MultiSelect from "./components/MultiSelect";
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
  return (
    <>
      <div className="card">
        <MultiSelect
          data={["javascript", "Java", "C++", "kotlin"]}
          title="Select"
          onChange={(e) => console.log(e)}
        />
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
        <Typografy variant="CardTitle">Hola</Typografy>
        <Typografy variant="CardTitle" color="#000">
          Hola
        </Typografy>
        <CheckBox
          name="autopista"
          label="Autopista"
          onChange={(e) => console.log(e.target.checked)}
        />
        <div onChange={(e) => console.log(e.target.value)}>
          <RadioButton label="Python" name="lenguaje" value="python" />
          <RadioButton label="Java" name="lenguaje" value="java" />
          <RadioButton label="JavaScript" name="lenguaje" value="javaScript" />
          <RadioButton label="C++" name="lenguaje" value="c++" />
        </div>
      </div>
    </>
  );
}

export default App;
