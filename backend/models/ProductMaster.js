import mongoose from 'mongoose'
var product_master = new Schema(
    {
      product: { type: String },
      manufacture: { type: String },
      hsn: { type: String },
     sch_name: { type: String },
     uom: { type: String },
     strip: { type: String },
     pack: { type: String },
      loc: { type: String },
      rack: { type: String },
      subtrack: { type: String },
      mrp: { type: String },
      major_content: { type: String },
      sgst: { type: String },
      strd_disc: { type: String },
      cgst: { type: String },
      max_disc: { type: String },
      igst: { type: String },
      gst_flag: { type: String },
    },
    { versionKey: false }
  );
  var ProductMaster = mongoose.model("product_master", product_master, "product_master");
  export default ProductMaster  