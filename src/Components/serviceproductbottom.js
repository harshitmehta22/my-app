export function Service(props){
  return(
    <>
        <div className="services-block col-md-4 sm-4">
                        <div className="service-image" key={props.id}>
                            <img src= { props.image } ></img>
                        </div>
                        <div className="service-heading Sercice-head">
                            <h4 className="heading">
                                {props.heading}
                            </h4>
                            <h4 className="heading">
                               {props.subheading}
                            </h4>
                            <p className="common-content">{props.content}</p>
                            <a href="#">
                                <p>{props.nwcontent}</p>
                            </a>
                            <a href="#">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        </div>
        </div>
    </>
  )
}