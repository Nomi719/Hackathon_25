const Loan = require('../models/Loan');

exports.applyLoan = async (req, res) => {
  try {
    const loan = new Loan({ ...req.body, userId: req.user.userId });
    await loan.save();
    res.status(201).json({ message: 'Loan request submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error processing loan request', error });
  }
};

exports.getUserLoans = async (req, res) => {
  try {
    const loans = await Loan.find({ userId: req.user.userId });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching loan details', error });
  }
};