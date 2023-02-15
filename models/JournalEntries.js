const mongoose = require('mongoose');

const JournalEntrySchema = new mongoose.Schema({
    account:{type: String, required: true},
    name:{type: String, required: true},
    debit:{type: Number, required: true},
    credit:{type: Number, required: true},
    memo:{type: String, required: true},
    journalDate: {type: Date, required: true},
    journalNo: {type: Number, required: true},
    desc: {type: String, required: true},
    attachment: {type: Buffer}
    
  },{timestamps:true});

mongoose.models={}
export default mongoose.model("JournalEntry", JournalEntrySchema);