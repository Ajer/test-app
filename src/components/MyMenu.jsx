
let MenuItems = (props)=>{
    return(
      <li>{props.info}</li>
    );
}

function MyMenu()
{
    return (
       <ul>
           <MenuItems info="Home" />
       </ul>
    );
}

export default MyMenu;