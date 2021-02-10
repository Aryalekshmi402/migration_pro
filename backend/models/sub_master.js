import mongoose from 'mongoose'
var sub_master = new Schema(
    {
      itemcode: { type: String },
      item: { type: String },
      batchno: { type: String },
      manufacture: { type: String },
     qty: { type: String },
     mrp: { type: String },
     pur_rate: { type: String },
     exp_date: { type: String },
      hsn: { type: String },
      invoiceno: { type: String },
      invoicedate: { type: String },
      supplier: { type: String },
      payment: { type: String },
      taxamount: { type: String },
      disper: { type: String },
      disamnt: { type: String },
      sgst: { type: String },
      cgst: { type: String },
      cess: { type: String },
      total_gst: { type: String },
      taxableamnt: { type: String },
      netamnt: { type: String },
      grand:{type:String}
  
    },
    { versionKey: false }
  );

  var sub_master = mongoose.model("sub_master", sub_master, "sub_master");
  export default sub_master