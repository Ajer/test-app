/* import logo from './logo.svg';*/
import img from './images/s-product-3.jpg'
import Title from './components/Title';
import './App.css';
import MenuItems from './components/MenuItems';
import MyMenu from './components/MyMenu';



/* const Title = () =>
{
  return(
    <h1>React is fun from Title2</h1>
  );
} */

function App() {
  const name = "John";
  const imageUrl = "https://picsum.photos/seed/picsum/400/400";
  let str = "Om oss";

  console.log(process.env.REACT_APP_OTHER);

  return (
    <div className="App">
      <h1>Hello here is {name}</h1> 
      <MenuItems item1={"Hem"} item2={str} item3="produkter"/>

      <MyMenu />

      <Title title="Hello React!!"/>



      {/* <h2>{name==='John'?'Yes':'No'}</h2>
      <br/>*/}

      <img src={imageUrl} alt=""></img> 

    </div>
  );
}

export default App;
