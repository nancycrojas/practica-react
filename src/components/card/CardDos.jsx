import { Button } from "../button/Button"


export const CardDos = ({ title, img, description }) => {
  return (
    <div>
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <p>{description}</p>
        {/* <Button text="Ver mas..."/> */}
        <Button>Ver mas...</Button>
    </div>
  )
}
