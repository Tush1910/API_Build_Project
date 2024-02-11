const express = require('express');
const router = express.Router();
const Users = require('../models/Users');


router.get('/users', async (req, res) => {
  try {
    const { username, email } = req.query;
    let users;
    if (username && email) {
      users = await Users.find({ username, email });
    } else if (username) {
      users = await Users.find({ username });
    } else if (email) {
      users = await Users.find({ email });
    } else {
      users = await Users.find();
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const user = new Users(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByIdAndUpdate(id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Users.findByIdAndDelete(id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
