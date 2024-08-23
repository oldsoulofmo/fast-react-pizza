import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eius
          possimus rerum sed reprehenderit officiis nemo harum fugiat, dolor
          adipisci ducimus cum odit, labore, illum fuga iste distinctio quae
          repellat.
        </h1>
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
