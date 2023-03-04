import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
        <ul className='nav'>
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                    <a href="#">Contacto</a>
            </li>
            <li>
                <a href="#">Información</a>
            </li>
        </ul>
    </nav>
  );
};
