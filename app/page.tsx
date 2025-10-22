import { FoodMenu } from "./_components/clientSections/FoodMenu";
import { Footer } from "./_components/clientSections/Footer";
import { Header } from "./_components/clientSections/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <FoodMenu />
      <Footer />
    </div>
  );
}
