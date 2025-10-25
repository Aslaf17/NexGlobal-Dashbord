import React from "react";
import {
    PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis,
    CartesianGrid, Tooltip, BarChart, Bar
} from "recharts";
import jellyfishBg from "../../assets/images/Home/jellyfish.jpg";
import {
    stats, satisfactionData, referralData, COLORS, REFERRAL_COLORS,
    attendanceData, trainingData, bottomStats, projects, orders
} from "../../data/home.js";

export default function Home() {
    return (
        <>
            {/* ================= STATS SECTION ================= */}
            <section className="pt-30 px-10 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-gradient-br from-[#211d0d] to-[#000000] p-4 rounded-2xl shadow-md flex justify-between items-center hover:scale-105 transition-transform duration-300 h-[110px]">
                                <div>
                                    <p className="text-gray-400 text-xs">{item.title}</p>
                                    <h2 className="text-xl font-semibold mt-1">{item.value}</h2>
                                    <p className={`text-xs mt-0.5 ${item.positive ? "text-green-400" : "text-red-400"}`}>{item.change}</p>
                                </div>
                                <div className="bg-yellow-300/60 p-2 rounded-lg">
                                    <Icon size={18} className="text-black" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ================= WELCOME + SATISFACTION + REFERRAL ================= */}
            <section className="px-10 pt-4 flex flex-col lg:flex-row gap-4">
                <div className="lg:w-[40%] rounded-2xl p-6 bg-cover bg-center flex flex-col justify-between text-white h-[300px]"
                    style={{ backgroundImage: `url(${jellyfishBg})`, backgroundBlendMode: "overlay", backgroundColor: "rgba(0,0,0,0.4)" }}>
                    <div>
                        <p className="text-sm text-gray-300">Welcome back,</p>
                        <h2 className="text-2xl font-semibold">Sherin John</h2>
                        <p className="text-gray-300 text-sm mt-1">Here's your HR overview for today.</p>
                    </div>
                    <button className="mt-6 text-yellow-300 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                        Tap to review →
                    </button>
                </div>
                <div className="lg:w-[60%] flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 bg-gradient-br from-[#262007] to-[#0a0a0a] rounded-2xl p-4 flex flex-col items-center justify-center h-[300px]">
                        <p className="text-white text-sm font-semibold mb-2">Employee Satisfaction</p>
                        <p className="text-gray-500 text-xs mb-4">Based on feedback</p>
                        <div className="relative flex items-center justify-center">
                            <PieChart width={130} height={130}>
                                <Pie data={satisfactionData} innerRadius={45} outerRadius={60} startAngle={90} endAngle={-270} paddingAngle={2} dataKey="value">
                                    {satisfactionData.map((entry, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                            <div className="absolute flex flex-col items-center justify-center">
                                <span className="text-2xl font-semibold text-white">80%</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-xs mt-4">Overall satisfaction</p>
                    </div>
                    <div className="flex-1 bg-gradient-br from-[#141414] to-[#0a0a0a] rounded-2xl p-4 flex flex-col justify-between h-[300px] text-white">
                        <div>
                            <h3 className="text-white text-sm font-semibold">Referral Hiring</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-400 text-[15px] uppercase tracking-wider">Referred Candidates</p>
                                <h4 className="text-lg font-semibold">65 <span className="text-gray-400 text-xs">people</span></h4>
                            </div>
                            <div>
                                <p className="text-gray-400 text-[15px] uppercase tracking-wider">Bonus Points</p>
                                <h4 className="text-lg font-semibold">1,250</h4>
                            </div>
                            <div className="flex items-center justify-between pt-2">
                                <div>
                                    <p className="text-gray-400 text-[15px] uppercase tracking-wider">Efficiency</p>
                                </div>
                                <div className="relative flex items-center justify-center">
                                    <PieChart width={80} height={80}>
                                        <Pie data={referralData} innerRadius={28} outerRadius={36} startAngle={90} endAngle={-270} paddingAngle={1} dataKey="value">
                                            {referralData.map((entry, index) => (
                                                <Cell key={index} fill={REFERRAL_COLORS[index % REFERRAL_COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                    <div className="absolute text-[18px] font-semibold text-white">6.5</div>
                                </div>
                                <span className="text-gray-400 text-[15px]">Score</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ATTENDANCE + TRAINING ================= */}
            <section className="px-10 pt-6 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* ATTENDANCE */}
                <div className="lg:col-span-2 bg-gradient-br from-[#1a1a1a] to-[#000000] rounded-2xl p-4 shadow-lg">
                    <div className="mb-3">
                        <h2 className="text-white text-lg font-semibold">Monthly Attendance</h2>
                        <p className="text-green-400 text-sm">+2% more than last month</p>
                        <p className="text-gray-400 text-xs">2025</p>
                    </div>
                    <ResponsiveContainer width="100%" height={230}>
                        <AreaChart data={attendanceData}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#facc15" stopOpacity={0.6} />
                                    <stop offset="95%" stopColor="#000000" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" stroke="#555" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} />
                            <YAxis stroke="#555" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} />
                            <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
                            <Tooltip contentStyle={{ background: "#111", border: "none", color: "#fff" }} />
                            <Area type="monotone" dataKey="uv" stroke="#facc15" strokeWidth={3} fill="url(#colorUv)" dot={false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* TRAINING PROGRESS */}
                <div className="bg-gradient-br from-[#1a1a1a] to-[#000000] rounded-2xl p-4 flex flex-col justify-between shadow-lg">
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-1">Training Progress</h2>
                        <p className="text-green-400 text-sm font-medium">(+15%)</p>
                        <p className="text-gray-400 text-xs mb-4">than last week</p>
                    </div>
                    <div className="bg-[#0d0d0d] rounded-xl p-2 mb-4">
                        <ResponsiveContainer width="100%" height={140}>
                            <BarChart data={trainingData}>
                                <Bar dataKey="pv" fill="#facc15" radius={[6, 6, 0, 0]} barSize={16} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {bottomStats.map((item, index) => (
                            <div key={index} className="flex flex-col items-start">
                                <div className="flex items-center gap-1 mb-1">
                                    <span className="text-yellow-400 text-lg">{item.icon}</span>
                                    <p className="text-gray-400 text-xs">{item.label}</p>
                                </div>
                                <p className="text-white font-semibold text-sm">{item.value}</p>
                                <div className="w-full h-1 bg-gray-800 rounded-full mt-1">
                                    <div className="h-1 bg-yellow-400 rounded-full" style={{ width: `${item.percent}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= HR TASKS + REQUESTS ================= */}
            <section className="px-10 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-gradient-br from-[#1a1a1a] to-[#000000] rounded-2xl p-4 shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-white text-lg font-semibold">HR Tasks</h2>
                            <p className="text-green-400 text-sm">Current Month Overview</p>
                        </div>
                    </div>
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-800">
                                <th className="pb-2 font-medium">TASK</th>
                                <th className="pb-2 font-medium">ASSIGNED TO</th>
                                <th className="pb-2 font-medium">STATUS</th>
                                <th className="pb-2 font-medium">COMPLETION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((proj, index) => {
                                const Icon = proj.icon;
                                return (
                                    <tr key={index} className="border-b border-gray-800 hover:bg-[#111] transition">
                                        <td className="py-3 flex items-center gap-2"><Icon size={18} className="text-yellow-400" /><span className="text-white text-sm">{proj.company}</span></td>
                                        <td className="py-3">
                                            <div className="flex items-center">
                                                {proj.members.map((m, i) => (<img key={i} src={m} alt="member" className="w-6 h-6 rounded-full border-2 border-black -ml-2 first:ml-0" />))}
                                            </div>
                                        </td>
                                        <td className="py-3 text-gray-300">{proj.budget}</td>
                                        <td className="py-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-white text-sm">{proj.completion}%</span>
                                                <div className="flex-1 h-1 bg-gray-800 rounded-full">
                                                    <div className="h-1 bg-yellow-400 rounded-full" style={{ width: `${proj.completion}%` }} />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="bg-gradient-br from-[#1a1a1a] to-[#000000] rounded-2xl p-4 shadow-lg">
                    <h2 className="text-white text-lg font-semibold mb-1">HR Requests</h2>
                    <p className="text-green-400 text-sm mb-4">Pending / New</p>
                    <div className="space-y-2">
                        {orders.map((order, index) => {
                            const Icon = order.icon;
                            return (
                                <div key={index} className="flex items-start gap-3 hover:bg-[#111] p-2 rounded-lg transition">
                                    <div className="bg-[#facc15]/20 p-2 rounded-full"><Icon size={18} className="text-yellow-400" /></div>
                                    <div>
                                        <p className="text-white text-sm font-medium">{order.title}</p>
                                        <p className="text-gray-500 text-xs">{order.date}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
