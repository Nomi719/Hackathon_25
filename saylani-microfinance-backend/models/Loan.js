const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    amount: { type: Number, required: true },
    period: { type: Number, required: true },
    guarantors: [
        {
            name: String,
            email: String,
            cnic: String,
            location: String,
        }
    ],
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Loan', LoanSchema);
