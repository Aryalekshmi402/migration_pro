import mongoose from 'mongoose'
var sale_master = new Schema(
    {
      customer: { type: String },
      name: { type: String },
      address: { type: String },
      referred: { type: String },
      rname: { type: String },
      addr: { type: String },
      note: { type: String },
     date: { type: String },
     time: { type: String },
     item: { type: String },
     invoiceno: { type: String },
     invoicedate: { type: String },
     quantity: { type: String },
     mrp: { type: String },
     taxpercent: { type: String },
     discountper: { type: String },
     discountamnt: { type: String },
     taxamnt: { type: String },
     taxableamnt: { type: String },
     netamnt: { type: String },
     grand:{type:String}
  
     
    },
    { versionKey: false }
  );
  var sale_master = mongoose.model("sale_master", sale_master, "sale_master");
  export default sale_master