import sale_master from '../models/sale_master.js'
import asyncHandler from 'express-async-handler'


var bodyParser = require("body-parser");
app.use(bodyParser.json())
 

const saleFormdata = asyncHandler(async (req, res) => {
    sale_master.collection.insertMany(req.body, function (err, docs) {
        if (err) {
        res.send(err);
        } else {
        res.send({ data: "Record has been Inserted..!!" });
        }
    });
    console.log(req.body);
  })

  const suggestions = asyncHandler(async (req, res) => {
    ProductMaster.find({product: {'$regex':new RegExp("^"+req.body.name,"i")}}, function(err, data) {
        if (err) {
          res.send(err);
        } else {
          
          res.send(data);
        }
      });
  })

  const itemDetails = asyncHandler(async (req, res) => {
    const data={quantity:10,mrp:160,discountper:5};
    res.send({ data });
  })


//server stat on given port
export {
    saleFormdata,suggestions,itemDetails
}
