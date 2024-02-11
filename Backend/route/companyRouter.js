const express = require('express');
const router = express.Router();
const Company = require('../models/Company');


router.post('/', async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', getCompany, (req, res) => {
  res.json(res.company);
});


router.put('/:id', getCompany, async (req, res) => {
  try {
    const updatedCompany = await res.company.set(req.body).save();
    res.json(updatedCompany);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', getCompany, async (req, res) => {
  try {
    await res.company.remove();
    res.json({ message: 'Company deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getCompany(req, res, next) {
  try {
    const company = await Company.findById(req.params.id);
    if (company == null) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.company = company;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
