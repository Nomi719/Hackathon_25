const Loan = require('../models/Loan');

exports.applyLoan = async (req, res) => {
    const { category, subcategory, amount, period, guarantors } = req.body;

    try {
        const newLoan = new Loan({
            userId: req.user.id,
            category,
            subcategory,
            amount,
            period,
            guarantors,
        });

        await newLoan.save();
        res.status(201).json({ message: 'Loan application submitted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserLoans = async (req, res) => {
    try {
        const loans = await Loan.find({ userId: req.user.id });
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
