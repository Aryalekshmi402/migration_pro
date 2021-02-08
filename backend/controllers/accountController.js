import asyncHandler from 'express-async-handler'
import Account from '../models/accountModel.js'

// @desc    Register a new supplier
// @route   POST /api/supplier
// @access  Public
const registerSupplier = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { values } = req.body

  const supplierName = values.fullName;
  const status = values.status;
  const address = values.address;
  const email = values.email;
  const mobile = values.mobile;
  const city = values.city;
  const pincode = values.pincode;
  const contactPerson = values.contactPerson;
  const gstno = values.gstno;
  const gstType = values.gstType;
  const discount = values.discount;
  const gstValid = values.gstValid;
  const supplierDlno1 = values.dlno1;
  const supplierDlno2 = values.dlno2;
  const autoLock = values.autoLock;
  const accountHead = values.bankHead;
  const accountNumber = values.bankAccno;
  const branchName = values.bankBranch;
  const bankName = values.bankName;
  const bankIfsc = values.bankIfsc;
  const bankMicr = values.bankMicr;
  const billType = values.billType;
  const panNo = values.panNo;
  const accType = values.accType;
  const creditDays = values.creditDays;
  const creditLimit = values.creditLimit;
  const debitDays = values.debitDays;
  const debitLimit = values.debitLimit;
  const noofBills = values.noofBills;
  const lockDays = values.lockDays;
  const paymentMethod = values.paymentMethod;
  const isSale = values.isSale;
  const isPurchase = values.isPurchase;
  const isLock = values.isLock;

  const userExists = await Account.findOne({ email,gstno })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const supplier = await Account.create({
    supplierName,
    status,
    address,
    email,
    mobile,
    city,
    pincode,
    contactPerson,
    gstno,
    gstType,
    discount,
    gstValid,
    supplierDlno1,
    supplierDlno2,
    autoLock,
    accountHead,
    accountNumber,
    branchName,
    bankName,
    bankIfsc,
    bankMicr,
    billType,
    panNo,
    accType,
    creditDays,
    creditLimit,
    debitDays,
    debitLimit,
    noofBills,
    lockDays,
    paymentMethod,
    isSale,
    isPurchase,
    isLock
  })

  console.log(supplier);
  if (supplier) {
    res.status(201).json(supplier)
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

export {
  registerSupplier
}
