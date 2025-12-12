import "./MenuItems.css";

function MenuItems(props)
{
    return(
        <ul>
          <li>
            <a  href="index.html">{props.item1}</a>
           </li>

          <li><a href="index.html" target="_blank">{props.item2}</a></li>
          <li><a href="#" target="_blank">{props.item3}</a></li>
  
        </ul>
    );
}


export default MenuItems;