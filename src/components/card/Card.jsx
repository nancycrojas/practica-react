import style from './Card.module.css';

const Card = () =>{
    return (
    <div className={style.card}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" placeholder="Nombre" id="nombre" className="input"/>
    </div>
    );
};

export { Card };