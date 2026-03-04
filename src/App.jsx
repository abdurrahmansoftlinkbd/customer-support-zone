import CustomerTickets from "./components/CustomerTickets";
import Navbar from "./components/Navbar";
import StatusBanners from "./components/StatusBanners";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <section className="font-inter bg-[#F5F5F5]">
        <CustomerTickets></CustomerTickets>
      </section>
    </>
  );
}

export default App;
