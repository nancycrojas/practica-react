//una prop "children" permite pasar elementos o componentes anidados a un componente como sus hijos, mientras que una prop normal se utiliza para pasar valores específicos y no anidados a un componente

// export const Button = ({color = 'orange', text = 'BOTON', isError}) => {
export const Button = ({color = 'orange', children = 'BOTON'}) => {
  
    //objeto style
    const style = {
        backgroundColor:color,
    }
    //CREANDO UNA CONSTANTE STYLE
  // return <button style={style}>{text}{isError?'❌':text}</button>;
  return <button style={style}>{children}</button>;

  //O PONERLO DIRECTAMENTE CON ESTILOS EN LINEA
  // return (
  //   <button 
  //   style={{
  //     backgroundColor: color,
  //   }}
  //   >
  //   {text}
  //   {isError?'❌':text}
  //   </button>
  // );
  
};
