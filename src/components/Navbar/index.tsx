import "./style.scss";
import ButtonNav, { MS } from "@/components/ButtonNav";

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

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ButtonNav onClick={() => console.log("Home")}>Home</ButtonNav>
      <ButtonNav data={data}>Page</ButtonNav>
      <ButtonNav onClick={() => console.log("About")}>About</ButtonNav>
      <ButtonNav onClick={() => console.log("Contact")}>Contact</ButtonNav>
    </nav>
  );
}
