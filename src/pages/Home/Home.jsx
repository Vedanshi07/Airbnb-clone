import Navbar from "../../components/Navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "../../components/Categories/Categories";
import PropertyGrid from "../../components/PropertyGrid/PropertyGrid";

function Home() {
  return (
    <MainLayout>
      <Landing />
      <SearchBar />
      <Categories />
      <PropertyGrid />
    </MainLayout>
  );
}

export default Home;