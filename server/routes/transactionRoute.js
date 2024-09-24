const express = require("express");
const router= express.Router();

const transactionController= require("../controllers/transactionController");


router.post("/amountsave",  transactionController.amountSave);
router.post("/displayearning",  transactionController.displayEarning);
router.post("/expensesave", transactionController.expenseSave);
router.post("/displayexpenses",  transactionController.displayExpenses);
router.post("/displayreport",  transactionController.displayReports);
router.post("/usertotalexpenses", transactionController.userTotalExpenses);




module.exports=router;
