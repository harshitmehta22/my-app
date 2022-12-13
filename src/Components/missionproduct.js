// import missionimage from "../assests/images/pic4.jpg"
export function Mission(props){
    return(
        <>
            <div className="row clearfix">
            <div className="col-md-4 col-sm-6">
                <div className="mission-image" key={props.id}>
                <img src={ props.imagenew }></img>
                </div>
            </div>
            <div className="col-md-8 col-sm-6">
               <div className="mission-content-block">
               <h2 className="heading">{props.Namehead}</h2>
               <ul>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
                <li>To exercise wisdom and fairness in relationships with clients, employees and stakeholders.</li>
               </ul>
                </div>
            </div>
            </div>
        </>
    );
}