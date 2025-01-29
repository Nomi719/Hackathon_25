const express = require('express');
const { applyLoan, getUserLoans } = require('../controllers/loanController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/apply', protect, applyLoan);
router.get('/my-loans', protect, getUserLoans);

module.exports = router;