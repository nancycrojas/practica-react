import LogoReact from '../../assets/react.svg';

import './Logo.css';

//la prop es un boolean
//si es true se muestra el titulo
//si es false se muestra solo la img

export const Logo = ({ withTitle }) => {
  //withTitle

  if(withTitle){
    //header con titulo
    return (
      <div className='logo'>
        <img src={LogoReact} alt="logo de react" />  
        <h1 className='title'>Ada Props</h1>
      </div>
    );
  } 

  return (
    <div className='logo'>
      <img src={LogoReact} alt="logo de react" />  
      {/* <h1 className='title'>Ada Props</h1> */}
    </div>
  );
};
