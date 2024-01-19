const mongooose = require("mongoose");

const TaskSchema = new mongooose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    trim: true,
    maxlength:[20,'name can not exceed 20 characters']
 },
  completed:{
    type: Boolean,
    default: false 
  } 
});

module.exports = mongooose.model("Task", TaskSchema);
