import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Edit, Trash2, Eye, Plus } from "lucide-react";
import { employeesData, departmentData, statsData } from "../../data/employee"

const Employees = () => {
    const [employees, setEmployees] = useState(employeesData);
    const [showModal, setShowModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        id: "",
        department: "",
        role: "",
        status: "Active",
    });

    const COLORS = ["#facc15", "#d13030", "#FF8C00", "#1E40AF", "#22C55E"];

    // Delete Employee
    const handleDeleteEmployee = (id) => {
        const updated = employees.filter((emp) => emp.id !== id);
        setEmployees(updated);
        if (selectedEmployee?.id === id) setSelectedEmployee(null);
    };

    // Add Employee
    const handleAddEmployee = () => {
        setEmployees([...employees, newEmployee]);
        setShowModal(false);
        setNewEmployee({ name: "", id: "", department: "", role: "", status: "Active" });
    };

    // Employee Details Fields Map
    const detailFields = (emp) => [
        { label: "Name", value: emp.name || "—" },
        { label: "Employee ID", value: emp.id || "—" },
        { label: "Department", value: emp.department || "—" },
        { label: "Role", value: emp.role || "—" },
        { label: "Email", value: emp.email || "Not available" },
        { label: "Phone", value: emp.phone || "Not provided" },
        { label: "Date of Joining", value: emp.doj || "Not recorded" },
        { label: "Manager", value: emp.manager || "Not assigned" },
        { label: "Address", value: emp.address || "Not added" },
        { label: "Performance Score", value: emp.performance || "Not yet reviewed" },
    ];

    const stats = statsData(employees);

    return (
        <div className="min-h-screen text-white px-10 py-30">
            {/* ================= HEADER ================= */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <h1 className="text-3xl font-semibold text-yellow-400 tracking-wide">Employees</h1>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-xl hover:bg-yellow-500 transition duration-200 font-medium shadow-lg"
                >
                    <Plus size={18} /> Add Employee
                </button>
            </div>

            {/* ================= STATS CARDS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="bg-gradient-br from-[#1a1a1a] to-[#000000] p-5 rounded-2xl shadow-md hover:shadow-yellow-500/20 transition-transform transform hover:-translate-y-1 duration-300"
                    >
                        <p className="text-gray-400 text-xs">{stat.title}</p>
                        <h2 className="text-2xl font-semibold mt-2 text-yellow-400">{stat.value}</h2>
                    </div>
                ))}
            </div>

            {/* ================= EMPLOYEE TABLE ================= */}
            <div className="bg-gradient-br from-[#141414] to-[#000000] rounded-2xl shadow-lg overflow-hidden mb-10">
                <table className="w-full text-left text-sm">
                    <thead className="bg-[#0d0d0d] text-gray-400 uppercase text-xs tracking-wider">
                        <tr>
                            {["ID", "Name", "Department", "Role", "Status", "Actions"].map((header) => (
                                <th key={header} className="px-6 py-3">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp, idx) => (
                            <tr key={idx} className="border-t border-[#222] hover:bg-[#1a1a1a] transition">
                                <td className="px-6 py-3">{emp.id}</td>
                                <td className="px-6 py-3">{emp.name}</td>
                                <td className="px-6 py-3 text-yellow-400">{emp.department}</td>
                                <td className="px-6 py-3">{emp.role}</td>
                                <td className="px-6 py-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            emp.status === "Active"
                                                ? "bg-green-400/20 text-green-400"
                                                : emp.status === "On Leave"
                                                ? "bg-yellow-400/20 text-yellow-300"
                                                : "bg-red-400/20 text-red-400"
                                        }`}
                                    >
                                        {emp.status}
                                    </span>
                                </td>
                                <td className="px-6 py-3 flex gap-3">
                                    <button
                                        className="text-blue-400 hover:text-blue-500"
                                        onClick={() => setSelectedEmployee(emp)}
                                    >
                                        <Eye size={16} />
                                    </button>
                                    <button
                                        className="text-green-400 hover:text-green-500"
                                        onClick={() => setSelectedEmployee(emp)}
                                    >
                                        <Edit size={16} />
                                    </button>
                                    <button
                                        className="text-red-400 hover:text-red-500"
                                        onClick={() => handleDeleteEmployee(emp.id)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ================= DEPARTMENT + DETAILS SECTION ================= */}
            <div className="flex flex-wrap gap-6 justify-between">
                {/* Left - Pie Chart */}
                <div className="bg-gradient-br from-[#0c0c0c] to-[#000000] rounded-2xl p-6 shadow-lg w-[350px] h-[350px] flex-shrink-0">
                    <h2 className="text-lg font-semibold mb-4 text-yellow-400 text-center">
                        Department Distribution
                    </h2>
                    <ResponsiveContainer width="100%" height="85%">
                        <PieChart>
                            <Pie
                                data={departmentData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
                                label
                            >
                                {departmentData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    background: "#f3eeee",
                                    border: "none",
                                    color: "#fff",
                                    borderRadius: "8px",
                                    fontSize: "12px",
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Right - Employee Details Card */}
                <div className="flex-1 bg-gradient-br from-[#111111] to-[#000000] rounded-2xl p-6 shadow-lg min-h-[350px] border border-yellow-400/10">
                    <h2 className="text-lg font-semibold mb-4 text-yellow-400">Employee Details</h2>
                    {selectedEmployee ? (
                        <div className="space-y-3">
                            {detailFields(selectedEmployee).map((item, idx) => (
                                <p key={idx}>
                                    <span className="text-gray-400">{item.label}:</span> {item.value}
                                </p>
                            ))}
                            <p>
                                <span className="text-gray-400">Status:</span>
                                <span
                                    className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${
                                        selectedEmployee.status === "Active"
                                            ? "bg-green-400/20 text-green-400"
                                            : selectedEmployee.status === "On Leave"
                                            ? "bg-yellow-400/20 text-yellow-300"
                                            : "bg-red-400/20 text-red-400"
                                    }`}
                                >
                                    {selectedEmployee.status}
                                </span>
                            </p>
                        </div>
                    ) : (
                        <div className="text-gray-500 text-center mt-10">
                            Select an employee to view details
                        </div>
                    )}
                </div>
            </div>

            {/* ================= ADD EMPLOYEE MODAL ================= */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="bg-gradient-br from-[#1a1a1a] to-[#000000] text-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-yellow-400/10">
                        <h2 className="text-2xl font-semibold mb-5 text-yellow-400">
                            Add New Employee
                        </h2>
                        <div className="flex flex-col gap-3">
                            {["id", "name", "department", "role"].map((field) => (
                                <input
                                    key={field}
                                    type="text"
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    value={newEmployee[field]}
                                    onChange={(e) =>
                                        setNewEmployee({ ...newEmployee, [field]: e.target.value })
                                    }
                                    className="bg-[#0d0d0d] border border-gray-700 p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                                />
                            ))}
                            <select
                                value={newEmployee.status}
                                onChange={(e) =>
                                    setNewEmployee({ ...newEmployee, status: e.target.value })
                                }
                                className="bg-[#0d0d0d] border border-gray-700 p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                            >
                                <option value="Active">Active</option>
                                <option value="On Leave">On Leave</option>
                                <option value="Probation">Probation</option>
                            </select>
                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-white transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddEmployee}
                                    className="px-4 py-2 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Employees;
