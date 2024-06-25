/* import logo from './logo.svg';*/
import img from './images/s-product-3.jpg'
import Title from './components/Title';
import './App.css';
import MenuItems from './components/MenuItems';

// function Title()
// {
//   return(
//     <h1>React is fun</h1>
//   );
// }

/* const Title = () =>
{
  return(
    <h1>React is fun from Title2</h1>
  );
} */

function App() {
  const name = "John";
  const imageUrl = "https://picsum.photos/seed/picsum/400/400";
  return (
    <div className="App">
      <h1>Hello here is {name}</h1>
      <Title />
      <MenuItems />
      <h2>{name==='John'?'Yes':'No'}</h2>
      {/* <img src={url}></img> */}
      <br/>
      <img src={imageUrl} alt=""></img>
    </div>
  );
}

export default App;
