import "@/App.scss";
import Navbar from "@/components/Navbar";
import PageMain from "@/Pages/PageMain";

function App() {
  return (
    <div
      style={{
        height: "3000px",
        width: "100%",
        background:
          "linear-gradient(180deg, rgba(12,23,38,1) 0%, rgba(60,89,115,1) 35%, rgba(163,62,121,1) 100%)",
      }}
    >
      <Navbar />
      <PageMain />
    </div>
  );
}

export default App;
