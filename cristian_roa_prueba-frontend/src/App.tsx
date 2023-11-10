import "@/App.scss";
import Navbar from "@/components/Navbar";
import PageMain from "@/Pages/PageMain";
import Modal from "@/components/Modal";

function App() {
  return (
    <div className="App">
      <Modal />
      <Navbar />
      <PageMain />
    </div>
  );
}

export default App;
