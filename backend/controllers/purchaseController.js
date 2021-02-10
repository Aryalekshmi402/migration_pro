
import Sample from '../models/productModel.js'
import ProductMaster from '../models/ProductMaster.js'
import sub_master from '../models/sub_master.js'
import asyncHandler from 'express-async-handler'


var bodyParser = require("body-parser");
app.use(bodyParser.json())
 


const getData = asyncHandler(async (req, res) => {
    Sample.find({}, function(err, data) {
        if (err) {
          res.send(err);
        } else {
          
          res.send(data);
        }
      });
  })

  const mainFormdata = asyncHandler(async (req, res) => {
    sub_master.collection.insertMany(req.body, function (err, docs) {
        if (err) {
          res.send(err);
        } else {
          res.send({ data: "Record has been Inserted..!!" });
        }
      });
     console.log(req.body);
  })

  const formData = asyncHandler(async (req, res) => {
    var newProduct = new ProductMaster(req.body)
    newProduct.save(function(err, data) {
        if (err) {
        res.send(err);
        } else {
        res.send({ data: "Record has been Inserted..!!" });
        
        }
    });
    console.log(req.body);
  })
  
  const saveData = asyncHandler(async (req, res) => {
    var mod = new model(req.body);
    mod.save(function(err, data) {
        if (err) {
        res.send(err);
        } else {
        res.send({ data: "Record has been Inserted..!!" });
        }
    });
  })

export {
    getData,mainFormdata,formData,saveData
}
