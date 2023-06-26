import Navbar from "./components/Navbar"
import ProductBox from "./components/ProductBox"
import img from './img/img-prueba.jpg';

function App() {


  return (
    <>
      <Navbar />
      <ProductBox 
        img={img} 
        nameProd='Producto 1' 
        price={500}
        timeLap='1 Month'
        category='Legendary'
      />
    </>
  )
}

export default App
