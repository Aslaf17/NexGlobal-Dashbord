
import {Wallet,Globe,FileText,Smile,Bell,Database,Code,Layers,ShoppingCart,} from "lucide-react";
import avatar1 from "../assets/images/Home/avatar1.webp";
import avatar2 from "../assets/images/Home/avatar2.webp";
import avatar3 from "../assets/images/Home/avatar3.webp";

// ================= STATS =================
export const stats = [
    { title: "Total Employees", value: "120", change: "+5%", positive: true, icon: Smile },
    { title: "Present Today", value: "102", change: "-2%", positive: false, icon: Wallet },
    { title: "Leave Requests", value: "8", change: "+10%", positive: true, icon: FileText },
    { title: "Open Positions", value: "5", change: "+25%", positive: true, icon: Globe },
];

export const satisfactionData = [
    { name: "Satisfied", value: 80 },
    { name: "Remaining", value: 20 },
];

export const referralData = [
    { name: "Hired via Referral", value: 65 },
    { name: "Remaining", value: 35 },
];

export const COLORS = ["#facc15", "#1e1e1e"];
export const REFERRAL_COLORS = ["#facc15", "#1e1e1e"];

export const attendanceData = [
    { month: "Jan", uv: 90 },
    { month: "Feb", uv: 60 },
    { month: "Mar", uv: 98 },
    { month: "Apr", uv: 110 },
    { month: "May", uv: 90 },
    { month: "Jun", uv: 112 },
    { month: "Jul", uv: 120 },
    { month: "Aug", uv: 108 },
    { month: "Sep", uv: 110 },
    { month: "Oct", uv: 0 },
    { month: "Nov", uv: 0 },
    { month: "Dec", uv: 0 },
];

export const trainingData = [
    { name: "Mon", pv: 3 },
    { name: "Tue", pv: 2 },
    { name: "Wed", pv: 4 },
    { name: "Thu", pv: 5 },
    { name: "Fri", pv: 3 },
    { name: "Sat", pv: 1 },
    { name: "Sun", pv: 0 },
];

export const bottomStats = [
    { icon: "👥", label: "Employees", value: "120", percent: 80 },
    { icon: "📝", label: "Leave Pending", value: "8", percent: 20 },
    { icon: "🎯", label: "Performance Goals", value: "95%", percent: 95 },
    { icon: "📌", label: "Open Positions", value: "5", percent: 50 },
];

export const projects = [
    {
        company: "Employee Onboarding",
        icon: Code,
        members: [avatar1, avatar2],
        budget: "N/A",
        completion: 80,
    },
    {
        company: "Quarterly Training",
        icon: Layers,
        members: [avatar2, avatar3],
        budget: "N/A",
        completion: 60,
    },
    {
        company: "Recruitment Drive",
        icon: Database,
        members: [avatar3],
        budget: "N/A",
        completion: 40,
    },
];

export const orders = [
    { icon: Bell, title: "Leave request - John Doe", date: "22 OCT 10:00 AM" },
    { icon: Layers, title: "New employee onboarding - Jane Smith", date: "21 OCT 2:00 PM" },
    { icon: ShoppingCart, title: "Payroll submission - October", date: "20 OCT 5:00 PM" },
];
