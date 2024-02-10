import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get('/api/companies')
      .then(response => {
        setCompanies(response.data);
      })
      .catch(error => {
        console.error('Error fetching companies:', error);
      });
  }, []);

  return (
    <div class="ms-3 mt-4 " style={{width: '50rem'}}>
        <h2 className='mb-3 ms-3 '>Company List</h2>
        <form action="">
          <input class="form-control ms-3 " type="text" placeholder="Filter by Company"/>
          <button className="btn btn-primary mt-2 ms-3">Search</button>
          <ul>
            {companies.map(company => (
              <li key={company.id}>{company.name}</li>
            ))}
          </ul>
        </form>
    </div>
  );
};

export default CompanyList;
