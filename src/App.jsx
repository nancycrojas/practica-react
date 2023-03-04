// un componente es una función que retorna jsx

// para importar de un export "normal" tenemos que agregar las llaves {} y debemos respetar el nombre

// para importar de un export default no es necesario las llaves y podemos cambiar el nombre
import Header from './components/Header';

//renombrar un componente con el export "normal"
import { Card as CardRenombrada  } from "./components/card/Card"
import LogoReact from './assets/react.svg';
import { Alert } from './components/alert/Alert';
import './App.css';


import { Button } from './components/button/Button';
import { CardDos } from './components/card/CardDos';
import { AppLayout } from './layouts/AppLayout';

function App () {
  return (
    <AppLayout>
      <div className='App'>
      <h1>Hola mundo</h1>
      <Header />
      <Header />
      <CardRenombrada  />
      <img src={LogoReact} alt="logo de react" />
      <img src="/vite.svg" alt="logo de vite" />

      <div className='container'>
       <Button color="red" size="lg">Hola desde children</Button>
       <Button color="blue" size="sm">Chau desde children</Button>
       <Button color="green" />
       {/* <Button isError={true} /> */}
       {/* <Button text="hola desde la propiedad" isError={true} /> */}
      </div>
      
      <div className='container'>
        <Alert type='success'>
          <div>
           <h1 style={{fontSize:'24px'}}>Esto es una ALERTA</h1>
          </div>
        </Alert>
        <Alert type='error'>
          <div>
          <h1>Ups hubo un error</h1>
          <img src="/vite.svg" alt="logo de vite" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cumque a architecto hic doloribus quae fugiat, velit rem, est odit maxime vel ex dolor nam sunt quod. Nihil, quo et.</p>
          </div>
        </Alert>
      </div>

      <div className="container">
        <CardDos title="Card 1" img="https://illustoon.com/photo/350.png" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."/>
      </div>

    </div>
    </AppLayout>
    
  )
};

export default App;
