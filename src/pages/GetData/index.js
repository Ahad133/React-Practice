import React, { useState, useEffect } from "react";
import './index.css';

export default function GetData() {

  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   const apiUrl = "https://reqres.in/api/users?page=2";

  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserData(data.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // return (
  //   <div className="get-container">
  //     <div className="top">
  //       <h1>Get Data</h1>
  //     </div>

  //     <div className="user-data">
  //       <h2>Fetched User Data</h2>
  //       <ul>
  //         {userData.map((user) => (
  //           <li key={user.id}>
  //             <img src={user.avatar} alt="User Avatar" />
  //             <p>ID: {user.id}</p>
  //             <p>Name: {`${user.first_name} ${user.last_name}`}</p>
  //             <p>Email: {user.email}</p>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );
// }

  const nestedData = [
    [
        {
            "username": "UserA",
            "agendaID": "AgendaA_ID",
            "patients": [
                {
                    "patientID": "PatientX_ID",
                    "patientID64": "PatientX_ID64"
                },
                {
                    "patientID": "PatientY_ID",
                    "patientID64": "PatientY_ID64"
                },
            ]
        },
        {
            "username": "UserB",
            "agendaID": "AgendaB_ID",
            "patients":[
                {
                  "patientID": "PatientZ_ID",
                  "patientID64": "PatientZ_ID64"
                },
            ]
        },
    ],
  ]

  return (
    <div>
      {nestedData.map(innerArray => (
        <div>
          {innerArray.map(item => (
            <div>
              <h3>{item.username}</h3>
              <p>Agenda ID: {item.agendaID}</p>
              <ul>
                {item.patients.map(patient => (
                  <li>
                    Patient ID: {patient.patientID}, Patient ID64: {patient.patientID64}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
    );
  }

  // return (
  //   <div className="get-container">
  //     <div className="top">
  //       <h1>Get Data</h1>
  //     </div>

  //     <div className="data-display" style={{padding:"20px"}}>

  //           {/* user data */}.

  //       {nestedData[0].map((item, index) => (
  //         <div key={index} className="data-item">
  //           <br/>
  //           <p>Username: {item.username}</p>
  //           <p>Agenda ID: {item.agendaID}</p>

  //           {/* patient data */}

  //           {item.patients && item.patients.length > 0 && (
  //             <div>
  //               {item.patients.map((patient, patientIndex) => (
  //                 <div key={patientIndex}>
  //                   <p>Patient ID: {patient.patientID}</p>
  //                   <p>Patient ID64: {patient.patientID64}</p>
  //                 </div>
  //               ))}
  //             </div>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
// }

// return (
//     <div className="get-container">
//       <div className="top">
//         <h1>Get Data</h1>
//       </div>
//       <div className="data-display" style={{ padding: "20px" }}>
//         {nestedData.map((nestedArray, arrayIndex) => (
//           <div key={arrayIndex}>
//             {nestedArray.map((item, index) => (
//               <div key={index} className="data-item">
//                 <p>Username: {item.username}</p>
//                 <p>Agenda ID: {item.agendaID}</p>

//                 {item.patients && item.patients.length > 0 && (
//                   <div>
//                     <p>Patients:</p>
//                     {item.patients.map((patient, patientIndex) => (
//                       <div key={patientIndex}>
//                         <p>Patient ID: {patient.patientID}</p>
//                         <p>Patient ID64: {patient.patientID64}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const userIndex = 0;
// const userData = nestedData[0][userIndex];

// return (
//   <div>
//     <h1>Nested Data Example</h1>
//     <div>
//       <p>Username: {userData.username}</p>
//       <p>Agenda ID: {userData.agendaID}</p>
//       <h2>Patients:</h2>
//       <ul>
//         {userData.patients.map((patient, patientIndex) => (
//           <li key={patientIndex}>
//             <p>Patient ID: {patient.patientID}</p>
//             <p>Patient ID64: {patient.patientID64}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );
// }