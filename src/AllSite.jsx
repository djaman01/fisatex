import Bienfaits from "./sections/Bienfaits";
import FirstPart from "./sections/FirstPart";
import Header from "./components/Header";
import VotreGant from "./sections/VotreGant";
import Footer from "./components/Footer";

const AllSite = () => {
  return (
    <main>
      <header>
        <Header />
      </header>

      <section className="padding-b">
        <FirstPart />
      </section>
      <section className="padding padding-b">
        <Bienfaits />
      </section>
      <section className="padding-b">
        <VotreGant />
      </section>

      <footer className="padding-x pt-8 bg-gray-800 pb-8">
        <Footer />
      </footer>
    </main>
  );
};

export default AllSite;
