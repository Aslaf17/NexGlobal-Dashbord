import { useState } from "react";
import { Eye, Trash2, Plus, X, Check } from "lucide-react";
import { initialLeaves } from "../../data/leaveRequest";

const LeaveRequest = () => {
    const [leaves, setLeaves] = useState(initialLeaves);
    const [showModal, setShowModal] = useState(false);
    const [selectedLeave, setSelectedLeave] = useState(null);
    const [newLeave, setNewLeave] = useState({
        employeeId: "",
        employeeName: "",
        department: "",
        role: "",
        leaveType: "Casual Leave",
        fromDate: "",
        toDate: "",
        reason: "",
        status: "Pending",
        appliedDate: new Date().toISOString().split("T")[0],
    });

    // ====== Add Leave ======
    const handleAddLeave = () => {
        const from = new Date(newLeave.fromDate);
        const to = new Date(newLeave.toDate);
        const totalDays = (to - from) / (1000 * 60 * 60 * 24) + 1;

        const newEntry = {
            ...newLeave,
            id: `L${String(leaves.length + 1).padStart(3, "0")}`,
            totalDays,
            year: new Date().getFullYear(),
        };
        setLeaves([...leaves, newEntry]);
        setShowModal(false);
        setNewLeave({
            employeeId: "",
            employeeName: "",
            department: "",
            role: "",
            leaveType: "Casual Leave",
            fromDate: "",
            toDate: "",
            reason: "",
            status: "Pending",
            appliedDate: new Date().toISOString().split("T")[0],
        });
    };

    // ====== Delete Leave ======
    const handleDeleteLeave = (id) => {
        setLeaves(leaves.filter((leave) => leave.id !== id));
        if (selectedLeave?.id === id) setSelectedLeave(null);
    };

    // ====== Approve / Reject ======
    const handleStatusUpdate = (id, status) => {
        setLeaves(
            leaves.map((leave) =>
                leave.id === id
                    ? { ...leave, status, approvedBy: "Admin" }
                    : leave
            )
        );
    };

    // ====== Badge Color ======
    const getStatusColor = (status) => {
        switch (status) {
            case "Approved":
                return "bg-green-400/20 text-green-400";
            case "Rejected":
                return "bg-red-400/20 text-red-400";
            case "Pending":
                return "bg-yellow-400/20 text-yellow-400";
            default:
                return "bg-gray-400/20 text-gray-400";
        }
    };

    return (
        <div className="min-h-screen text-white px-10">
            {/* ======= HEADER ======= */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <h1 className="text-3xl font-semibold text-yellow-400 tracking-wide">
                    Leave Requests
                </h1>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-xl hover:bg-yellow-500 transition duration-200 font-medium shadow-lg"
                >
                    <Plus size={18} /> New Leave Request
                </button>
            </div>

            {/* ======= LEAVE REQUEST TABLE ======= */}
            <div className="bg-gradient-to-br from-[#141414] to-[#000000] rounded-2xl shadow-lg overflow-hidden mb-10">
                <table className="w-full text-left text-sm">
                    <thead className="bg-[#0d0d0d] text-gray-400 uppercase text-xs tracking-wider">
                        <tr>
                            {[
                                "ID",
                                "Employee",
                                "Department",
                                "Type",
                                "From",
                                "To",
                                "Days",
                                "Status",
                                "Actions",
                            ].map((h) => (
                                <th key={h} className="px-6 py-3">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {leaves.map((leave) => (
                            <tr
                                key={leave.id}
                                className="border-t border-[#222] hover:bg-[#1a1a1a] transition"
                            >
                                <td className="px-6 py-3">{leave.id}</td>
                                <td className="px-6 py-3">{leave.employeeName}</td>
                                <td className="px-6 py-3 text-yellow-400">
                                    {leave.department}
                                </td>
                                <td className="px-6 py-3">{leave.leaveType}</td>
                                <td className="px-6 py-3">{leave.fromDate}</td>
                                <td className="px-6 py-3">{leave.toDate}</td>
                                <td className="px-6 py-3">{leave.totalDays}</td>
                                <td className="px-6 py-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                            leave.status
                                        )}`}
                                    >
                                        {leave.status}
                                    </span>
                                </td>
                                <td className="px-6 py-3 flex gap-3">
                                    {/* View */}
                                    <button
                                        className="text-blue-400 hover:text-blue-500"
                                        onClick={() => setSelectedLeave(leave)}
                                    >
                                        <Eye size={16} />
                                    </button>

                                    {/* Approve */}
                                    <button
                                        className="text-green-400 hover:text-green-500"
                                        onClick={() =>
                                            handleStatusUpdate(leave.id, "Approved")
                                        }
                                    >
                                        <Check size={16} />
                                    </button>

                                    {/* Reject */}
                                    <button
                                        className="text-red-400 hover:text-red-500"
                                        onClick={() =>
                                            handleStatusUpdate(leave.id, "Rejected")
                                        }
                                    >
                                        <X size={16} />
                                    </button>

                                    {/* Delete */}
                                    <button
                                        className="text-gray-400 hover:text-white"
                                        onClick={() => handleDeleteLeave(leave.id)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ======= SELECTED LEAVE DETAILS ======= */}
            <div className="bg-gradient-to-br from-[#111111] to-[#000000] rounded-2xl p-6 shadow-lg min-h-[300px] border border-yellow-400/10">
                <h2 className="text-lg font-semibold mb-4 text-yellow-400">
                    Leave Details
                </h2>
                {selectedLeave ? (
                    <div className="space-y-3 text-sm">
                        {Object.entries(selectedLeave).map(([key, value]) => (
                            <p key={key}>
                                <span className="text-gray-400 capitalize">
                                    {key.replace(/([A-Z])/g, " $1")}:
                                </span>{" "}
                                {value}
                            </p>
                        ))}
                    </div>
                ) : (
                    <div className="text-gray-500 text-center mt-10">
                        Select a leave request to view details
                    </div>
                )}
            </div>

            {/* ======= ADD LEAVE MODAL ======= */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] text-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-yellow-400/10">
                        <h2 className="text-2xl font-semibold mb-5 text-yellow-400">
                            New Leave Request
                        </h2>
                        <div className="flex flex-col gap-3">
                            {["employeeId", "employeeName", "department", "role", "reason"].map(
                                (field) => (
                                    <input
                                        key={field}
                                        type="text"
                                        placeholder={
                                            field.charAt(0).toUpperCase() + field.slice(1)
                                        }
                                        value={newLeave[field]}
                                        onChange={(e) =>
                                            setNewLeave({
                                                ...newLeave,
                                                [field]: e.target.value,
                                            })
                                        }
                                        className="bg-[#0d0d0d] border border-gray-700 p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                                    />
                                )
                            )}
                            <select
                                value={newLeave.leaveType}
                                onChange={(e) =>
                                    setNewLeave({ ...newLeave, leaveType: e.target.value })
                                }
                                className="bg-[#0d0d0d] border border-gray-700 p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                            >
                                {[
                                    "Casual Leave",
                                    "Sick Leave",
                                    "Annual Leave",
                                    "Maternity Leave",
                                    "Work From Home",
                                ].map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>

                            <div className="flex gap-3">
                                <input
                                    type="date"
                                    value={newLeave.fromDate}
                                    onChange={(e) =>
                                        setNewLeave({
                                            ...newLeave,
                                            fromDate: e.target.value,
                                        })
                                    }
                                    className="bg-[#0d0d0d] border border-gray-700 p-2 rounded-lg w-1/2 focus:ring-2 focus:ring-yellow-400 outline-none"
                                />
                                <input
                                    type="date"
                                    value={newLeave.toDate}
                                    onChange={(e) =>
                                        setNewLeave({
                                            ...newLeave,
                                            toDate: e.target.value,
                                        })
                                    }
                                    className="bg-[#0d0d0d] border border-gray-700 p-2 rounded-lg w-1/2 focus:ring-2 focus:ring-yellow-400 outline-none"
                                />
                            </div>

                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-white transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddLeave}
                                    className="px-4 py-2 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeaveRequest;
