import React, { useState, useEffect } from "react";
import axios from 'axios';
import './index.css';
import { saveAs } from 'file-saver';

export default function Sheets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const spreadsheetId = '1NA4Y6jw0m-_8hCLvUQYxNPSdtkljACH-Efo4UCU0bAU';
    const apiKey = 'AIzaSyDlov1BoDguLwfyY4e7j2u7x1zOO7bD2ZA'; 
    const sheetName = 'Sheet1'; 

    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        const values = response.data.values;
        const headers = values[0];
        const jsonData = [];

        for (let i = 1; i < values.length; i++) {
          const row = {};
          for (let j = 0; j < headers.length; j++) {
            row[headers[j]] = values[i][j];
          }
          jsonData.push(row);
        }

        setData(jsonData);
      })
      .catch(error => {
        console.error("Error reading data from Google Sheets", error);
      });
  }, []);

  const downloadJsonFile = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    saveAs(blob, 'data.json');
  };

  return (
    <div>
      <h1>Data from Google Sheets</h1>
      {data.length > 0 ? (
        <div>
          <button onClick={downloadJsonFile}>Download JSON</button>
          <table className="sheets-table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((header, index) => <th key={index}>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even-row' : 'odd-row'}>
                  {Object.values(row).map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading data...</p>
      )}

      <h2>JSON Data</h2>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
