import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Grid,Box } from '@material-ui/core'
import {  useForm,Form } from '../components/UseForm'
import Controls from "../components/controls/Controls";
import {register} from "../actions/accountAction";

const statusItems = [
    { id: 'active', title: 'Active' },
    { id: 'inactive', title: 'Inactive' }
]
const lockItems = [
    { id: 'enable', title: 'Enabled' },
    { id: 'disable', title: 'Disabled' },
]

const accItems = [
    { id: 'cash', title: 'Cash a/c' },
    { id: 'bank', title: 'Bank a/c' },
    { id: 'trading', title: 'Trading a/c' },
    { id: 'other', title: 'Other a/c' }
]
const paymentItems = [
    { id: 'cash', title: 'Cash' },
    { id: 'card', title: 'Card' },
    { id: 'credit', title: 'Credit' },
]

const gsttypetCollection = [
    { id: '1', title: 'Registered' },
    { id: '2', title: 'Unregistered' },
]
const billtypeCollection = [
    { id: '1', title: 'Tax' },
    { id: '2', title: 'No Tax' },
]
const initialFValues = {
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    autoLock: 'enable',
    status: 'active',
    paymentMethod:'cash',
    lockItems:'unlock',
    isLock: false,
    isSales: false,
    isPurchase: true,
    accType: 'other'
    
}

const AccountMaster = () => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('pincode' in fieldValues)
            temp.pincode = fieldValues.pincode ? "" : "Pincode is required."  
        if ('gstno' in fieldValues)
            temp.gstno = fieldValues.gstno ? "" : "Gstnoode is required."  
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    
    const handleSubmit = e => {
        e.preventDefault(); 
        if (validate()){
            try {
                console.log(values);
            
                const config = {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
                axios.post('http://localhost:5000/api/account/register',{ values },config)
                .then(response => {
                    console.log(response.data);
                    alert('Supplier registerd')
                    window.location.reload(false);
                })
              } catch (error) {
               
                console.log(error)
            
              }
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6} >  
                    <Grid item xs={9}>
                        <Controls.Input
                            name="fullName"
                            label="Supplier Name"
                            value={values.fullName}
                            onChange={handleInputChange}
                            error={errors.fullName}
                        />
                    </Grid>
                    
                    <Controls.RadioGroup
                        name="status"
                        label="Status"
                        value={values.status}
                        onChange={handleInputChange}
                        items={statusItems}
                    />
                    <Grid item xs={9}>
                        <Controls.TextArea
                            label="Address"
                            name="address"
                            value={values.address}
                            onChange={handleInputChange}
                            error={errors.address}
                        /> 
                    </Grid>
                    <Grid item xs={9}>
                        <Controls.Input
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />
                    </Grid>
                   
                    <Grid item xs={9}>
                        <Controls.Input
                            label="Mobile"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleInputChange}
                            error={errors.mobile}
                        />
                    </Grid>
                    <Grid item xs={9} className="d-flex">
                        <Controls.Input
                            label="City"
                            name="city"
                            value={values.city}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label="Pincode"
                            name="pincode"
                            value={values.pincode}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <Controls.Input
                            label="Contact Person"
                            name="contactPerson"
                            value={values.contactPerson}
                            onChange={handleInputChange}
                            error={errors.contactPerson}
                        />
                    </Grid> 
                    <Grid item className="d-flex">
                        <Grid item xs={6}>
                            <Controls.Input
                                label="GST No"
                                name="gstno"
                                value={values.gstNo}
                                onChange={handleInputChange}
                                error={errors.gstNo}
                            />  
                        </Grid>  
                        <Grid item xs={3}>
                            <Controls.Select
                                label="GST Type"
                                name="gstType"
                                value={values.gstType}
                                onChange={handleInputChange}
                                options={gsttypetCollection}
                                error={errors.gstType}
                            />
                        </Grid>                          
                    </Grid>
                    
                    <Grid item xs={9} className="d-flex">
                        <Controls.Input
                            label="Discount"
                            name="discount"
                            value={values.discount}
                            onChange={handleInputChange}
                        />
                        
                        <Controls.DateSelect
                            label="Valid From"
                            name="gstValid"
                            value={values.gstValid}
                            onChange={handleInputChange}
                        /> 
                    </Grid>
                    <Grid item xs={9} className="d-flex">
                        <Controls.Input
                            label="DLNO 1"
                            name="dlno1"
                            value={values.dlno1}
                            onChange={handleInputChange}
                            error={errors.dlno1}
                        /> 
                        <Controls.Input
                        label="DLNO 2"
                        name="dlno2"
                        value={values.dlno2}
                        onChange={handleInputChange}
                        error={errors.dlno2}
                        /> 
                    </Grid>
                    <Controls.RadioGroup
                        name="autoLock"
                        label="Auto Lock"
                        value={values.autoLock}
                        onChange={handleInputChange}
                        items={lockItems}
                    />
                </Grid>
                <Grid item xs={6}> 
                    <Grid item className="d-flex">
                        <Controls.Input
                            name="bankHead"
                            label="Account Head"
                            value={values.bankHead}
                            onChange={handleInputChange}
                            error={errors.bankHead}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <Controls.Input
                                name="bankAccno"
                                label="Account No"
                                value={values.bankAccno}
                                onChange={handleInputChange}
                                error={errors.bankAccno}
                            />
                    </Grid>
                    <Grid item xs={12} className="d-flex">
                        <Controls.Input
                            name="bankName"
                            label="Bank Name"
                            value={values.bankName}
                            onChange={handleInputChange}
                            error={errors.bankName}
                        />
                        <Controls.Input
                            name="bankBranch"
                            label="Branch"
                            value={values.bankBranch}
                            onChange={handleInputChange}
                            error={errors.bankBranch}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <Controls.Input
                                name="bankIfsc"
                                label="IFSC"
                                value={values.bankIfsc}
                                onChange={handleInputChange}
                                error={errors.bankIfsc}
                            />
                    </Grid>
                    <Grid item xs={9}>
                        <Controls.Input
                                name="bankMicr"
                                label="MICR"
                                value={values.bankMicr}
                                onChange={handleInputChange}
                                error={errors.bankMicr}
                            />
                    </Grid>
                    <Grid item xs={12} className="d-flex">
                        <Controls.Select
                                name="billType"
                                label="Bill Type"
                                value={values.billType}
                                onChange={handleInputChange}
                                options={billtypeCollection}
                                error={errors.billType}
                            />
                        <Controls.Input
                            name="panNo"
                            label="Pan No"
                            value={values.panNo}
                            onChange={handleInputChange}
                            error={errors.panNo}
                        />
                    </Grid>
                    <Controls.RadioGroup
                        name="accType"
                        label="Account Type"
                        value={values.accType}
                        onChange={handleInputChange}
                        items={accItems}
                    /> 
                    <Grid item xs={12} className="d-flex">
                        <Controls.Input
                                name="creditDays"
                                label="Credit Days"
                                value={values.creditDays}
                                onChange={handleInputChange}
                                error={errors.creditDays}
                            />
                        <Controls.Input
                            name="creditLimit"
                            label="Credit Limit"
                            value={values.creditLimit}
                            onChange={handleInputChange}
                            error={errors.creditLimit}
                        />
                    </Grid>
                    <Grid item xs={12} className="d-flex">
                        <Controls.Input
                                name="debitDays"
                                label="Debit Days"
                                value={values.debitDays}
                                onChange={handleInputChange}
                                error={errors.debitDays}
                            />
                        <Controls.Input
                            name="debitLimit"
                            label="Debit Limit"
                            value={values.debitLimit}
                            onChange={handleInputChange}
                            error={errors.debitLimit}
                        />
                    </Grid>
                    <Grid item xs={12} className="d-flex">
                        <Controls.Input
                                name="noofBills"
                                label="No Of Bills"
                                value={values.noofBills}
                                onChange={handleInputChange}
                                error={errors.noofBills}
                            />
                        <Controls.Input
                            name="lockDays"
                            label="Lock Days"
                            value={values.lockDays}
                            onChange={handleInputChange}
                            error={errors.lockDays}
                        />
                    </Grid>
                    <Controls.RadioGroup
                        name="paymentMethod"
                        label="Payment Method"
                        value={values.paymentMethod}
                        onChange={handleInputChange}
                        items={paymentItems}
                    /> 
                     <Grid item xs={12} className="d-flex">
                        <Controls.Checkbox
                            name="isSales"
                            label="Allow sales"
                            value={values.isSales}
                            onChange={handleInputChange}
                        />
                        <Controls.Checkbox
                            name="isPurchase"
                            label="Allow purchase"
                            value={values.isPurchase}
                            onChange={handleInputChange}
                        />
                         <Controls.Checkbox
                            name="isLock"
                            label="Lock"
                            value={values.isLock}
                            onChange={handleInputChange}
                        />
                     </Grid>
                    
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default AccountMaster
