export default function AboutItem(props){
    //url
    const image = props.src;
    //Content string
    const title = props.contentTitle;
    const text = props.contentText;
    return(
        <div className="item">
            <img src={ image } alt="massage" />
            <div className="content">
                <h3>{ title }</h3>
                <p className="text">{ text }</p>
            </div>
        </div>
    )
}