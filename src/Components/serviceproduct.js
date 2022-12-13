export function Product(props){
    return(
        <>
                     <div className="services-container col-md-4 col-sm-6">
                        <div className="service-image" key={props.id}>
                            <img src= { props.image } alt='Service-img'></img>
                        </div>
                        <div className="Sercice-head">
                            <h4>{props.name}</h4>
                            <a href="#">{props.read}<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        </div>
                     </div>
        </>
    );
}