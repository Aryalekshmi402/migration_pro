import mongoose from 'mongoose'
var pro_details = new Schema(
    {
      name: { type: String },
      address: { type: String },
      email: { type: String },
      contact: { type: String },
    },
    { versionKey: false }
  );
  var Sample = mongoose.model("store", pro_details, "store");

  export default Sample