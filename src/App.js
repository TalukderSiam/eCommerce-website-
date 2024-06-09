import logo from './logo.svg';
import './App.css';
import Homepage from './customar/Pages/Homepage/Homepage';
import Navigation from './customar/components/navigation/Navigation';
import Product from './customar/components/Product/Product';
import Footer from './customar/components/Foter/Footer';
function App() {
  return (
    <div className="">
      
        <Navigation/>
      <div>
     {/* <Homepage/> */}
      
      <Product/>
      
      </div>
      <Footer/>
    </div>

    
  );
}

export default App;
