
// import React, { Component } from "react";
// import './App.css';
// import BasicInfo from './Components/BasicInfo';


// VeryEasy Challenge
// VERY EASY
// class App extends Component
// render(){

//   return(

// <div className="App">

// <ul>
// <li> name: Bre-</li>
// <li> age: 26</li>
// <li> number: 10</li>
// </ul>
// </div>
// )
// }


// import React from 'react';

// class App extends React.Component 

//   render() {
//     return (
//       <div>
//         <h1>Name: Breana Young</h1>
//         <p>Number: 989-898-898</p>
//         <p>Date of Birth: October 13th, 1996</p>
//       </div>
//     );
//   }
// }




// Easy Challenge
// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {},
//     };
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>Name: {this.state.person.name}</h1>
//         <p>Number: {this.state.person.number}</p>
//         <p>Date of Birth: {this.state.person.dateOfBirth}</p>
//       </div>
//     );
//   }
// }



// export default App;




//Medium
// import React from 'react';

// class BasicInfo extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Name: {this.props.name}</h1>
//         <p>Number: {this.props.number}</p>
//         <p>Date of Birth: {this.props.dateOfBirth}</p>
//       </div>
//     );
//   }
// }








// Medium

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Breana Young',
//         number: '989898898',
//         dateOfBirth: 'October, 13th 1996',
//       },
//     };
//   }
  
//   render() {
//     return (
//       <div>
//         <BasicInfo {...this.state.person} />
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       person: {
//         firstName: 'Latori',
//         lastName: 'Miller',
//         favNumber: 10
//       }
//     }
//   } 
//   render(){
//     return(
//       // <div>{this.state.person.firstName}</div>
//       <BasicInfo person={this.state.person} />
//     )
//   }
// }

// export default App;






// Hard

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       people: [
//         {
//           name: "John Doe",
//           dateOfBirth: "Feb 14, 2009",
//           contactNumber: "767-890-6789",
//           email: "john.doe@example.com",
//         },
//         {
//           name: "Jane Smith",
//           dateOfBirth: "Feb 2, 1999",
//           contactNumber: "555-5888",
//           email: "jane.smith@example.com",
//         },
//         {
//           name: "Hatey Smart",
//           dateOfBirth: "Mar 3, 2030",
//           contactNumber: "984-123-6565",
//           email: "Hatey.smart@example.com",
//         },
//       ],
//     };
//   }
//   render() {
//     const BasicInfo = ({ person }) => (
//       <div>
//         <p>Name: {person.name}</p>
//         <p>Date of Birth: {person.dateOfBirth}</p>
//         <p>Contact Number: {person.contactNumber}</p>
//         <p>Email: {person.email}</p>
//       </div>
//     );
//     const peopleList = this.state.people.map((people, index) => (
//       <div key={index}>
//         <BasicInfo people={people} />
//       </div>
//     ));
//     return (
//       <div>
//         {peopleList}
//       </div>
//     );
//   }
// }

// export default App;