import CustomerTickets from "./components/CustomerTickets";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <section className="font-inter bg-[#F5F5F5]">
        <CustomerTickets></CustomerTickets>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
