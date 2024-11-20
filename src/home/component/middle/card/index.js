import './card.css';

function card({name,onClick,style}){
    return(
        <div className="card" onClick={onClick} style={style}>
            <h1>{name}</h1>
        </div>
    )
}

export default card;