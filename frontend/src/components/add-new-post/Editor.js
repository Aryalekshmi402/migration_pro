import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput , Button} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3" style={{marginLeft:170,width:800}}>
    <CardBody >
      <Form className="add-new-post" > 
      
       
        Item Name<FormInput size="lg" className="mb-3" placeholder="Item Name" />
        InvoiceNumber<FormInput size="lg" className="mb-3" placeholder="InvoiceNumber" />
        InvoiceDate<FormInput size="lg" className="mb-3" placeholder="InvoiceDate" />
        BatchNumber<FormInput size="lg" className="mb-3" placeholder="BatchNumber" />
        HSN<div style={{marginLeft:405,marginTop:-20}} >Quantity</div><FormInput size="lg" className="mb-3" placeholder="HSN" style={{width:350}} /> 
       <FormInput size="lg" className="mb-3" placeholder="QUANTITY" style={{ width:366,marginLeft: 400, marginTop: -65 }} />
        MRP<div style={{marginLeft:405,marginTop:-20}} >Total</div><FormInput size="lg" className="mb-3" placeholder="mrp" style={{width:350}} />
       <FormInput size="lg" className="mb-3" placeholder="Total" style={{ width:366,marginLeft: 400, marginTop: -65 }} />
        <Button theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">file_copy</i> Update
          </Button>
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
