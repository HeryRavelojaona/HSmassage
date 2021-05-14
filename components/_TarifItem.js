
export default function TarifItem(props){
    //Content string
    const name = props.name;
    const price = props.price;
    return(
        <div className="item">
            <div className="name">{ name }</div>
            <div className="price">{ price }</div>
        </div>
    )
}