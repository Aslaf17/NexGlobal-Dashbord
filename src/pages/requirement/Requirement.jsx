import React, { useState } from "react";
import {PieChart,Pie,Cell,ResponsiveContainer,BarChart,Bar,XAxis,Tooltip} from "recharts";
import {recruitmentStats,jobs,candidates,offerData,recruitmentAnalytics} from "../../data/requirement"
import { Bell, Plus } from "lucide-react";


const COLORS = ["#facc15", "#4ade80", "#f87171", "#60a5fa"];

const Recruitment = () => {
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    return (
        <>
            <div className="px-10 py-30 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {recruitmentStats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-gradient-br from-[#1f1f1f] to-[#e84f4f55] p-4 rounded-2xl flex justify-between items-center hover:scale-105 transition-transform duration-300"
                            >
                                <div>
                                    <p className="text-gray-400 text-xs">{stat.title}</p>
                                    <h2 className="text-xl font-semibold mt-1">{stat.value}</h2>
                                    <p
                                        className={`text-xs mt-0.5 ${
                                            stat.positive ? "text-green-400" : "text-red-400"
                                        }`}
                                    >
                                        {stat.change}
                                    </p>
                                </div>
                                <div className="bg-yellow-300/60 p-2 rounded-lg">
                                    <Icon size={18} className="text-black" />
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* ================= JOB OPENINGS ================= */}
                <div className="bg-gradient-br from-[#1a1a1a] to-[#0000] rounded-2xl p-4 shadow-lg">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-white text-lg font-semibold">Job Openings</h2>
                        <button className="text-yellow-400 font-medium flex items-center gap-1">
                            <Plus size={16} /> Add Job
                        </button>
                    </div>
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-800">
                                <th className="pb-2">Title</th>
                                <th className="pb-2">Department</th>
                                <th className="pb-2">Posted</th>
                                <th className="pb-2">Applicants</th>
                                <th className="pb-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-gray-800 hover:bg-[#111] transition"
                                >
                                    <td className="py-2 text-white">{job.title}</td>
                                    <td className="py-2 text-gray-300">{job.department}</td>
                                    <td className="py-2 text-gray-300">{job.posted}</td>
                                    <td className="py-2 text-gray-300">{job.applicants}</td>
                                    <td
                                        className={`py-2 ${
                                            job.status === "Open" ? "text-green-400" : "text-yellow-400"
                                        }`}
                                    >
                                        {job.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ================= CANDIDATE PIPELINE ================= */}
                <div className="bg-gradient-br from-[#1a1a1a] to-[#0000] rounded-2xl p-4 shadow-lg">
                    <h2 className="text-white text-lg font-semibold mb-3">Candidate Pipeline</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {["Applied", "Screening", "Interview", "Offer", "Hired"].map(stage => (
                            <div
                                key={stage}
                                className="bg-[#111] rounded-xl p-2 h-[200px] overflow-y-auto"
                            >
                                <h3 className="text-gray-400 text-xs uppercase font-medium mb-2">{stage}</h3>
                                {candidates
                                    .filter(c => c.stage === stage)
                                    .map((c, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setSelectedCandidate(c)}
                                            className="bg-gray-900 p-2 rounded-lg mb-2 cursor-pointer hover:bg-gray-800"
                                        >
                                            <p className="text-white text-sm font-medium">{c.name}</p>
                                            <p className="text-gray-400 text-xs">{c.role}</p>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= CANDIDATE DETAILS MODAL ================= */}
                {selectedCandidate && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                        <div className="bg-[#1a1a1a] rounded-2xl p-6 w-[400px] relative">
                            <button
                                onClick={() => setSelectedCandidate(null)}
                                className="absolute top-3 right-3 text-gray-400 hover:text-white"
                            >
                                ✕
                            </button>
                            <h2 className="text-white font-semibold text-lg mb-2">{selectedCandidate.name}</h2>
                            <p className="text-gray-400 text-sm mb-1">Role: {selectedCandidate.role}</p>
                            <p className="text-gray-400 text-sm mb-1">Experience: {selectedCandidate.experience} yrs</p>
                            <p className="text-gray-400 text-sm mb-1">Location: {selectedCandidate.location}</p>
                            <div className="mt-4 flex gap-2">
                                <button className="bg-green-500 px-3 py-1 rounded-lg text-black font-medium">Shortlist</button>
                                <button className="bg-red-500 px-3 py-1 rounded-lg text-black font-medium">Reject</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= OFFERS ================= */}
                <div className="bg-gradient-br from-[#1a1a1a] to-[#0000] rounded-2xl p-4 shadow-lg">
                    <h2 className="text-white text-lg font-semibold mb-3">Offer Management</h2>
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-800">
                                <th className="pb-2">Candidate</th>
                                <th className="pb-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offerData.map((o, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-gray-800 hover:bg-[#111] transition"
                                >
                                    <td className="py-2 text-white">{o.name}</td>
                                    <td
                                        className={`py-2 ${
                                            o.status === "Accepted" ? "text-green-400" : "text-yellow-400"
                                        }`}
                                    >
                                        {o.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ================= RECRUITMENT ANALYTICS ================= */}
                <div className="bg-gradient-br from-[#1a1a1a] to-[#0000] rounded-2xl p-4 shadow-lg flex flex-col lg:flex-row gap-4">
                    <div className="flex-1">
                        <h2 className="text-white text-lg font-semibold mb-3">Applications per Job</h2>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={recruitmentAnalytics} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                <XAxis dataKey="job" stroke="#888" tick={{ fontSize: 12 }} />
                                <Tooltip />
                                <Bar dataKey="value" fill="#facc15" radius={[6, 6, 0, 0]} barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-white text-lg font-semibold mb-3">Application Distribution</h2>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={recruitmentAnalytics}
                                    dataKey="value"
                                    nameKey="job"
                                    innerRadius={40}
                                    outerRadius={80}
                                    paddingAngle={2}
                                >
                                    {recruitmentAnalytics.map((entry, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* ================= NOTIFICATIONS ================= */}
                <div className="bg-gradient-br from-[#1a1a1a] to-[#0000] rounded-2xl p-4 shadow-lg flex items-center gap-3">
                    <Bell size={20} className="text-yellow-400" />
                    <p className="text-white text-sm">5 new candidates applied for Software Engineer</p>
                </div>

                {/* ================= TALENT POOL ================= */}
                <div className="bg-gradient-br from-[#1a1a1a] to-[#0000] rounded-2xl p-4 shadow-lg">
                    <h2 className="text-white text-lg font-semibold mb-3">Talent Pool</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {candidates.map((c, i) => (
                            <div
                                key={i}
                                className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
                            >
                                <p className="text-white text-sm font-medium">{c.name}</p>
                                <p className="text-gray-400 text-xs">{c.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recruitment;
