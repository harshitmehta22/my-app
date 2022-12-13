export function Services(props){
    return(
        <div className="services-block-wrp">
            <div key={props.id} className="services-container">
                <div className="service-image">
                <img src={props.image} alt="service-img"></img>
                </div>
                <div className="Sercice-head">
                    <h4>{props.name}</h4>
                </div>
            </div>
        </div>
    )
}