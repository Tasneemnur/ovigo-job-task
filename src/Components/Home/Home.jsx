import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import Banner from "./banner";
import Communities from "./communities";
import Posts from "./Posts";



const Home = () => {
  
  return (
  <>
  <Navbar></Navbar>
  <Banner></Banner>
  <Posts></Posts>
  <Communities></Communities>
  <Footer></Footer>
  </>
  );
};

export default Home;
