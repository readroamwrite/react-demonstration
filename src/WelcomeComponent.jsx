// // import React from "react";

// // class WelcomeComponent extends React.Component {
// //   logout() {
// //     this.props.history.push("/logout");
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <h1 className="welcome">Hello, World!</h1>
// //         <br />
// //         <button className="submit_btn logout" onClick={this.logout.bind(this)}>
// //           Logout
// //         </button>
// //       </div>
// //     );
// //   }
// // }
// // export default WelcomeComponent;


// import React from "react";

// class WelcomeComponent extends React.Component {
//   logout() {
//     this.props.history.push("/logout");
//   }
//   render() {
//     const data = {
//       people: [
//         {
//           name: "John",
//           last_name: "Doe",
//           age: "25",
//           Occupation: "driver"
//         },
//         {
//           name: "Jack",
//           last_name: "Brown",
//           age: "24",
//           Occupation: "it"
//         },
//         {
//           name: "Oliver",
//           last_name: "Black",
  
//           age: "30",
//           Occupation: "cto"
//         }
//       ],
  
//       format: { last_name: "Last Name" }
//     };
  
//     return (
//       <div className="App">
//       <table>
//         <tbody>
//           <tr>
//             <th>Name</th>
//             <th>Last Name</th>
//             <th>Age</th>
//             <th>Occupation</th>
//           </tr>
//           {data.people.map((item, i) => (
//             <tr key={i}>
//               <td>{item.name}</td>
//               <td>{item.last_name}</td>
//               <td>{item.age}</td>
//               <td>{item.Occupation}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     );
//   }
// }
// export default WelcomeComponent;


import React from "react";

class WelcomeComponent extends React.Component {
   logout() {
     this.props.history.push("/logout");
   }
   render() {
     return (
      
      <div class="limiter">
      <div class="container-table100">
        <div class="wrap-table100">
            <div class="table">
            <div className="welcome">User Data Table</div>         <br />
              <div class="row header">
                <div class="cell">
                  First Name
                </div>
                <div class="cell">
                  Last Name
                </div>
                <div class="cell">
                  Phone Number
                </div>
                <div class="cell">
                  Email
                </div>
                <div class="cell">
                  College
                </div>
                <div class="cell">
                  Joining Year
                </div>
                <div class="cell">
                  Date of Birth
                </div>
                <div class="cell">
                  Gender
                </div>
              </div>
  
              <div class="row">
                <div class="cell" data-title="First Name">
                  fname7
                </div>
                <div class="cell" data-title="Last Name">
                  lname7
                </div>
                <div class="cell" data-title="Phone Number">
                  9145458592
                </div>
                <div class="cell" data-title="Email">
                  example11@gmail.com
                </div>
                <div class="cell" data-title="College">
                  ayurveda college 1
                </div>
                <div class="cell" data-title="Joining Year">
                  2017
                </div>
                <div class="cell" data-title="Date of Birth">
                  2001-01-01
                </div>
                <div class="cell" data-title="Gender">
                  F
                </div>
              </div>
  
              <div class="row">
                <div class="cell" data-title="First Name">
                  fname3
                </div>
                <div class="cell" data-title="Last Name">
                  lname3
                </div>
                <div class="cell" data-title="Phone Number">
                  9123422718
                </div>
                <div class="cell" data-title="Email">
                  example3@gmail.com
                </div>
                <div class="cell" data-title="College">
                  ayurveda college 3
                </div>
                <div class="cell" data-title="Joining Year">
                  2019
                </div>
                <div class="cell" data-title="Date of Birth">
                  1995-01-09
                </div>
                <div class="cell" data-title="Gender">
                  M
                </div>
              </div>
  
              <div class="row">
                <div class="cell" data-title="First Name">
                  fname4
                </div>
                <div class="cell" data-title="Last Name">
                  lname4
                </div>
                <div class="cell" data-title="Phone Number">
                  9223458718
                </div>
                <div class="cell" data-title="Email">
                  example4@gmail.com
                </div>
                <div class="cell" data-title="College">
                  ayurveda college 4
                </div>
                <div class="cell" data-title="Joining Year">
                  2012
                </div>
                <div class="cell" data-title="Date of Birth">
                  2010-01-01
                </div>
                <div class="cell" data-title="Gender">
                  F
                </div>
              </div>

              <div class="row">
                <div class="cell" data-title="First Name">
                  fname2
                </div>
                <div class="cell" data-title="Last Name">
                  lname2
                </div>
                <div class="cell" data-title="Phone Number">
                  9125445619
                </div>
                <div class="cell" data-title="Email">
                  example2@gmail.com
                </div>
                <div class="cell" data-title="College">
                  ayurveda college 2
                </div>
                <div class="cell" data-title="Joining Year">
                  2016
                </div>
                <div class="cell" data-title="Date of Birth">
                  2001-04-03
                </div>
                <div class="cell" data-title="Gender">
                  M
                </div>
              </div>

              <div class="row">
                <div class="cell" data-title="First Name">
                  fname6
                </div>
                <div class="cell" data-title="Last Name">
                  lname6
                </div>
                <div class="cell" data-title="Phone Number">
                  9236890123
                </div>
                <div class="cell" data-title="Email">
                  example6@gmail.com
                </div>
                <div class="cell" data-title="College">
                  ayurveda college 5
                </div>
                <div class="cell" data-title="Joining Year">
                  2018
                </div>
                <div class="cell" data-title="Date of Birth">
                  1999-04-12
                </div>
                <div class="cell" data-title="Gender">
                  M
                </div>
              </div>

              <div class="row">
                <div class="cell" data-title="First Name">
                  fname8
                </div>
                <div class="cell" data-title="Last Name">
                  lname8
                </div>
                <div class="cell" data-title="Phone Number">
                  9568200185
                </div>
                <div class="cell" data-title="Email">
                  example8@gmail.com
                </div>
                <div class="cell" data-title="College">
                  ayurveda college 3
                </div>
                <div class="cell" data-title="Joining Year">
                  2016
                </div>
                <div class="cell" data-title="Date of Birth">
                  2002-06-07
                </div>
                <div class="cell" data-title="Gender">
                  F
                </div>
              </div>
     
              <button className="submit_btn logout" onClick={this.logout.bind(this)}>
                  Logout
                  </button>
            </div>
            
        </div>
        
      </div>
    </div>
  
     );
   }
 }

 export default WelcomeComponent;