import Navbar from "./components/Navbar";
import StatusBanners from "./components/StatusBanners";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <header className="font-inter bg-[#F5F5F5]">
        <StatusBanners></StatusBanners>
      </header>
    </>
  );
}

export default App;
