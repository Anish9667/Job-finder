const express = require('express');
const router = express.Router();
const { createJob, getAllJobs } = require('../controllers/jobController');
const authenticate = require('../middlewares/authMiddleware');

 router.post('/jobs', authenticate, createJob);

 router.get('/jobs', getAllJobs);

module.exports = router;
