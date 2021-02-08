const customerSchemaCopy = require('../models/addUser')
const {all} = require('../routes/addUser')

module.exports.addCustomer=(request,response)=>{

    const cust_details = new customerSchemaCopy({
        customerName:request.body.customerName,
        phone_no:request.body.phone_no,
        email:request.body.email,
        address:request.body.address,
        city:request.body.city,
        state:request.body.state,
        country:request.body.country,
        prescription:request.body.prescription,
        gst:request.body.gst,
        delivery_option:request.body.delivery_option
  
    })
    cust_details.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
  }