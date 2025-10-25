// src/pages/Payroll.jsx
import React from "react";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { Play, Check, Download, Bell } from "lucide-react";
import {
    payrollStats,
    payrollTable,
    salaryDistribution,
    monthlyPayrollTrend,
    alerts,
} from "../../data/payroll";

const COLORS = ["#facc15", "#60a5fa", "#4ade80", "#f87171", "#c084fc"];
const formatINR = (n) => (typeof n === "number" ? `₹${n.toLocaleString("en-IN")}` : n);

export default function Payroll() {
    return (
        <div className="px-10 py-30 space-y-6">
            {/* Summary Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {payrollStats.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <div
                            key={i}
                            className="bg-gradient-br from-[#1f1f1f] to-[#0000] p-4 rounded-2xl flex justify-between items-center hover:scale-105 transition h-[110px]"
                        >
                            <div>
                                <p className="text-gray-400 text-xs">{s.title}</p>
                                <h2 className="text-xl font-semibold mt-1">{s.value}</h2>
                                {s.change && (
                                    <p
                                        className={`text-xs mt-0.5 ${
                                            s.positive ? "text-green-400" : "text-red-400"
                                        }`}
                                    >
                                        {s.change}
                                    </p>
                                )}
                            </div>
                            <div className="bg-yellow-300/60 p-2 rounded-lg">
                                <Icon size={18} className="text-black" />
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* Charts */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-br from-[#1a1a1a] to-[#0000] rounded-2xl p-4 shadow-lg">
                    <h3 className="text-white text-lg font-semibold mb-2">Salary Distribution</h3>
                    <ResponsiveContainer width="100%" height={220}>
                        <PieChart>
                            <Pie
                                data={salaryDistribution}
                                dataKey="value"
                                innerRadius={50}
                                outerRadius={95}
                                paddingAngle={3}
                            >
                                {salaryDistribution.map((entry, idx) => (
                                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="lg:col-span-2 bg-gradient-br from-[#1a1a1a] to-[#0000] rounded-2xl p-4 shadow-lg">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-white text-lg font-semibold">Monthly Payroll Trend</h3>
                            <p className="text-gray-400 text-xs">Total salary expense per month</p>
                        </div>
                        <div className="flex items-center gap-2">
                            {[{ label: "Run Payroll", icon: Play }, { label: "Approve", icon: Check }, { label: "Export", icon: Download }].map(
                                (btn, idx) => (
                                    <button
                                        key={idx}
                                        className="bg-[#111] px-3 py-1 rounded-lg text-sm text-white flex items-center gap-2 hover:scale-105 transition"
                                    >
                                        <btn.icon size={14} />
                                        {btn.label}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    <div className="mt-4 h-[220px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={monthlyPayrollTrend}>
                                <defs>
                                    <linearGradient id="gradExpense" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="5%" stopColor="#facc15" stopOpacity={0.6} />
                                        <stop offset="95%" stopColor="#000" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis
                                    dataKey="month"
                                    stroke="#555"
                                    tick={{ fill: "#888", fontSize: 12 }}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#555"
                                    tick={{ fill: "#888", fontSize: 12 }}
                                    axisLine={false}
                                />
                                <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
                                <Tooltip
                                    contentStyle={{ background: "#111", border: "none", color: "#fff" }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="expense"
                                    stroke="#facc15"
                                    strokeWidth={2.5}
                                    fill="url(#gradExpense)"
                                    dot={false}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>

            {/* Employee Table & Alerts */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-gradient-br from-[#1a1a1a] to-[#0000] rounded-2xl p-4 shadow-lg overflow-x-auto">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-white text-lg font-semibold">Employee Payroll</h3>
                        <div className="text-gray-400 text-xs">Cycle: Oct 2025</div>
                    </div>

                    <table className="w-full text-left text-sm min-w-[720px]">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-800">
                                {[
                                    "Employee",
                                    "Dept",
                                    "Base",
                                    "Allowances",
                                    "Deductions",
                                    "Net Pay",
                                    "Status",
                                    "Actions",
                                ].map((head, idx) => (
                                    <th key={idx} className="py-2">
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {payrollTable.map((emp) => (
                                <tr
                                    key={emp.id}
                                    className="border-b border-gray-800 hover:bg-[#111] transition"
                                >
                                    {[
                                        emp.name,
                                        emp.dept,
                                        formatINR(emp.base),
                                        formatINR(emp.allowances),
                                        formatINR(emp.deductions),
                                        formatINR(emp.net),
                                        <span
                                            className={
                                                emp.status === "Paid"
                                                    ? "text-green-400"
                                                    : "text-yellow-400"
                                            }
                                        >
                                            {emp.status}
                                        </span>,
                                        <div className="flex items-center gap-2">
                                            <button className="bg-[#111] px-2 py-1 rounded-md text-xs text-white hover:scale-105 transition">
                                                Generate Payslip
                                            </button>
                                            <button className="bg-[#111] px-2 py-1 rounded-md text-xs text-yellow-400 hover:scale-105 transition">
                                                Approve
                                            </button>
                                        </div>,
                                    ].map((val, idx) => (
                                        <td key={idx} className="py-3 text-white">
                                            {val}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col gap-4">
                    {alerts.map((alert, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-br from-[#1a1a1a] to-[#0000] rounded-2xl p-4 shadow-lg"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-yellow-300/20 p-2 rounded-full">
                                    <Bell size={18} className="text-yellow-400" />
                                </div>
                                <p className="text-gray-300 text-sm">{alert.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
