#! /usr/bin/env node

import Bank from "./BankAccount.js";
import Customer from "./Customer.js";

let bankAccount = new Bank();

console.log(bankAccount.Credit(50000));

let maryum = new Customer("Maryum", "Abrar", "Female", 20, "+92302235847", bankAccount);

maryum.customerInfo();
