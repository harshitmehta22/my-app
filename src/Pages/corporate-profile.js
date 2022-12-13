import * as React from 'react';
import { useState } from "react";
const App = () =>{
return(
  <>
  <h1>Hello</h1>
  </>
)
}
export default App;
// const App = () => {
//   const greeting = 'Welcome to React';

//   const [isShow, setShow] = React.useState(true);

//   const handleToggle = () => {
//     setShow(!isShow);
//   };

//   return (
//     <div>
//       <button onClick={handleToggle} type="button">
//         Toggle
//       </button>

//       {isShow ? <Welcome text={greeting} /> : null}
//     </div>
//   );
// };

// const Welcome = ({ text }) => {
//   return <h1>{text}</h1>;
// };
// function football(){
//     const shoot =()=>{
//         alert('Great');
//     }
//     return(
//         <button onClick={shoot}>Take The Shot</button>
//     );
// }
// // export default football;
// // export default App;



// ///Map Method For displaying all array
// function Car(props){
//     return<li>I am {props.brand}</li>
// }
// function Garage(){
//     const cars = ['Ford','BMW','Audi'];
//     //Key use
//     const car = [
//         {id:1,brand: 'BMW'},
//         {id:2,brand: 'Ford'},
//         {id:3,brand: 'Ford'},
//         {id:4,brand: 'Ford'}
//     ];
//     return(
//         <>
//         <h1>Who lives</h1>
//         <ul>
//             {car.map((car) =>
//             <Car
//             key={car.id}
//             brand={car.brand}
//             />
//             )}
//         </ul>
//         </>
//     )
// }
// function Myform(){
//     const [name, setName] =useState("");
//     const handleSubmit =(event) => {
//         event.preventDefault();
//         alert('The Name You Entered is: ${name}');
//     }
//     return(
//         <>
// <div class="container">
//   <div class="row justify-content-md-center">
//     <div class="col col-sm-6">
//       1 of 3
//     </div>
//     <div class="col-md-4">
//       2 of 3 (wider)
//     </div>
//     <div class="col">
//       3 of 3
//     </div>
//   </div>
//   <div class="row justify-content-center">
//     <div class="col">
//       1 of 3
//     </div>
//     <div class="col-5">
//       2 of 3 (wider)
//     </div>
//     <div class="col">
//       3 of 3
//     </div>
//   </div>
// </div>
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Enter Your Name:
//                 <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 />
//             </label>
//             <input type="submit" />
//         </form>
//       </>
//     )
// }
// function favColor(){
//  const [color, setColor] = useState("red");
//  return(
//   <>
//   <h1>MY Favourite Color</h1>
//    <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//   </>
//  )          
// }
// export default favColor;

// export default Garage;
// export default Myform;



// /If Else Condition
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }
// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
// export default Greeting;