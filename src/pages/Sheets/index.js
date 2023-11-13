import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setData, setError } from '../../store/actions/dataActions';
import './index.css';

export default function Sheets() {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.data);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const sheetdbEndpoint = 'https://sheetdb.io/api/v1/v9oysgjtwej7k';
    axios
      .get(sheetdbEndpoint)
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => {
        console.error('Error reading data from SheetDB', error);
        dispatch(setError('Error loading data. Please check the SheetDB configuration.'));
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://sheetdb.io/api/v1/v9oysgjtwej7k', formData)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error('Error submitting data to SheetDB', error);
        dispatch(
          setError('Error submitting data. Please check the form values and SheetDB configuration.')
        );
      });
  };

  return (
    <div>
      <h1>Data from Google Sheets</h1>
      {error ? (
        <p>{error}</p>
      ) : data.length > 0 ? (
        <div>
          <table className="sheets-table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even-row' : 'odd-row'}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading data...</p>
      )}

      <h2>Submit Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Number:
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
