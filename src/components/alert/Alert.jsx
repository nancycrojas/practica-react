import { Button } from '../button/Button';
import './Alert.css';

// reciba como prop el tipo de alerta (warning - error - success)
// boton X "cerrar"
// reciba el children ✅

export const Alert = ({ type = '', children }) => {
  //console.log(props);
  return (<div className={`alert ${type}`}>
    {children}
    <Button color="#876706">X</Button>
    </div>
  );
};
