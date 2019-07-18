import mongoose from 'mongoose';

const fractionSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  children: [this],
});

const Fraction = mongoose.model('Fraction', fractionSchema);

export default Fraction;
