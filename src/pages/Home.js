import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import './Home.css'
import img from '../images/home.avif'

const Home = () => {
  return (
    <>
      <Navbar />
      <div id = "box2">
        <h1>Little Lemon</h1>
        <p>Place</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora deleniti eum repellat explicabo ratione quisquam fugiat quidem. Tempora eius deserunt corrupti esse nemo earum, a doloremque minus molestias! Quia.</p>
      </div>
      <img src = {img} width={'100%'} />
      <Footer />
    </>
  );
};

export default Home;