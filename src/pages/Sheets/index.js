import React, { useState, useEffect } from "react";
import axios from 'axios';
import './index.css';

export default function Sheets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const spreadsheetId = '1NA4Y6jw0m-_8hCLvUQYxNPSdtkljACH-Efo4UCU0bAU';
    const apiKey = 'AIzaSyDlov1BoDguLwfyY4e7j2u7x1zOO7bD2ZA';

    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:Z?key=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        const newData = response.data.values;
        setData(newData);
      })
      .catch(error => {
        console.error("Error reading data from Google Sheets", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Google Sheets</h1>
      {data.length > 0 ? (
        <table className="sheets-table">
          <thead>
            <tr>
              {data[0].map((header, index) => <th key={index}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even-row' : 'odd-row'}>
                {row.map((cell, cellIndex) => <td key={cellIndex} className={`col-${cellIndex}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
