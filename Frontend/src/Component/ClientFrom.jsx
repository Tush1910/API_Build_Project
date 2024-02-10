import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ClientForm = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = { name, user, company, email, phone };

    axios.post('/api/clients', newClient)
      .then(response => {
        console.log('Client created successfully:', response.data);
        // Reset form fields
        setName('');
        setUser('');
        setCompany('');
        setEmail('');
        setPhone('');
      })
      .catch(error => {
        console.error('Error creating client:', error);
      });
  };

  return (
    <div>
      <div className="row ms-3 mt-4 ">
        <h2>Create Client</h2>
      </div>
        <div className="row ms-3">
          <div className="col-md-5">
            <form onSubmit={handleSubmit}>
              <div className="md-2 mb-2">
                <input className='form-control' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="md-2 mb-2">
                <input className='form-control' type="text" placeholder="User" value={user} onChange={(e) => setUser(e.target.value)} />
              </div>
              <div className="md-2 mb-2">
                <input className='form-control' type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className="md-2 mb-2">
                <input className='form-control' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="md-2 mb-2">
                <input className='form-control' type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="md-2 mb-2">
                <input type="submit" className="btn btn-secondary" value="Create" />
                <Link to={'/'} className='btn btn-danger ms-2'>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default ClientForm;
