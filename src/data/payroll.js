import { Banknote, Clock, CreditCard, FileText, Percent,  Users, Wallet } from "lucide-react";

// Top summary stats
export const payrollStats = [
  { title: "Employees Paid", value: 112, icon: Wallet, positive: true, change: "+3%" },
  { title: "Total Payroll", value: "₹2,450,000", icon: CreditCard, positive: true, change: "+6%" },
  { title: "Pending Payments", value: 4, icon: Clock, positive: false, change: "+1" },
  { title: "Next Payout", value: "2025-11-01", icon: FileText, positive: true, change: "" },
];

// Employee payroll table
export const payrollTable = [
  { id: "E001", name: "Chelsi Bell", dept: "Design", base: 45000, allowances: 5000, deductions: 4000, net: 46000, status: "Paid" },
  { id: "E002", name: "Gokul raj", dept: "Engineering", base: 85000, allowances: 8000, deductions: 12000, net: 81000, status: "Pending" },
  { id: "E003", name: "Aslaf", dept: "HR", base: 32000, allowances: 3000, deductions: 2500, net: 32500, status: "Paid" },
  { id: "E004", name: "abi", dept: "Sales", base: 60000, allowances: 6000, deductions: 7000, net: 59000, status: "Pending" },
];

// Salary distribution PieChart
export const salaryDistribution = [
  { name: "10k-20k", value: 20 },
  { name: "20k-40k", value: 45 },
  { name: "40k-80k", value: 30 },
  { name: "80k+", value: 15 },
];

// Monthly payroll trend AreaChart
export const monthlyPayrollTrend = [
  { month: "Apr", expense: 180000 },
  { month: "May", expense: 195000 },
  { month: "Jun", expense: 210000 },
  { month: "Jul", expense: 200000 },
  { month: "Aug", expense: 220000 },
  { month: "Sep", expense: 230000 },
  { month: "Oct", expense: 245000 },
];

// Overtime & Bonus BarChart
export const bonusData = [
  { dept: "Engineering", overtime: 120, bonus: 45 },
  { dept: "Sales", overtime: 80, bonus: 60 },
  { dept: "HR", overtime: 25, bonus: 10 },
  { dept: "Design", overtime: 40, bonus: 18 },
];

// Tax & Deductions
export const taxSummary = [
  { label: "Tax Deducted", value: "₹420,000", icon: Percent},
  { label: "Provident Fund", value: "₹82,500", icon: Banknote },
  { label: "Insurance", value: "₹35,000", icon: Users },
];

// Department-wise costs
export const departmentCosts = [
  { name: "Engineering", value: 1100000 },
  { name: "Sales", value: 700000 },
  { name: "HR", value: 200000 },
  { name: "Design", value: 165000 },
];

// Alerts
export const alerts = [
  { text: "2 employees require salary confirmation" },
  { text: "2 employees have missing tax IDs" },
];
