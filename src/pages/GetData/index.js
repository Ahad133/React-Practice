import React, { useState, useEffect } from "react";
import './index.css';

export default function GetData() {
//   const [userData, setUserData] = useState([]);
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
    ]
]
//   useEffect(() => {
//     const apiUrl = "https://reqres.in/api/users?page=2";

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setUserData(data.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

  return (
    <div className="get-container">
      <div className="top">
        <h1>Get Data</h1>
      </div>

      <div className="data-display" style={{padding:"20px"}}>

            {/* user data */}.

        {nestedData[0].map((item, index) => (
          <div key={index} className="data-item">
            <br/>
            <p>Username: {item.username}</p>
            <p>Agenda ID: {item.agendaID}</p>

            {/* patient data */}

            {item.patients && item.patients.length > 0 && (
              <div>
                {item.patients.map((patient, patientIndex) => (
                  <div key={patientIndex}>
                    <p>Patient ID: {patient.patientID}</p>
                    <p>Patient ID64: {patient.patientID64}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

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
}
