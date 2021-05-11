export default function AboutItem(props){
    //url
    const image = props.src;
    //Content string
    const content = props.content;
    return(
        <div className="item">
            <img src={ image } alt="massage" />
            <div className="content">
                <p>{ content }</p>
            </div>
        </div>


    )
}