const Item = ({children}) =>{// ou props
    return (
        
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
              {children} 
        </a>
       //ou {props.texto} ou {props.children}
    )
}

export default Item;

//para declarar um atributo dentro de uma função em react podemos usar a sintaxe {props.children};
//desse modo, ao se declarar essa tag no documento, devemos abrir e fechar essa tag, ex: <Item>conteúdo</Item>