function Title(props)
 {
  return(
    <div>
       <h1 style={colorStyle}>{props.title}</h1>
       
    </div>
  );
} 

let colorStyle= {color:'red',backgroundColor:'yellow'};

export default Title;