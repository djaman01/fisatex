import FirstPart from "./sections/FirstPart";
import Header from "./sections/Header";

const AllSite = () => {
  return (
    <main>
      <section>
        <Header />
      </section>

      <section className="padding-b xl:padding-r xl:padding-l">
        <FirstPart />
      </section>

  
    </main>
  );
};

export default AllSite;
