import { Calendar, File, Plus, UserCheck } from "lucide-react";

export const statsdata = (employees) => [
    { title: "Total Employees", value: employees.length },
    { title: "Active", value: employees.filter((e) => e.status === "Active").length },
    { title: "On Leave", value: employees.filter((e) => e.status === "On Leave").length },
    { title: "Probation", value: employees.filter((e) => e.status === "Probation").length },
];

export const recruitmentStats = [
  { title: "Open Positions", value: 12, icon: Plus, positive: true, change: "+2" },
  { title: "Applications", value: 340, icon: File, positive: true, change: "+12%" },
  { title: "Interviews Scheduled", value: 28, icon: Calendar, positive: false, change: "-3%" },
  { title: "Offers Made", value: 6, icon: UserCheck, positive: true, change: "+1" },
];

export const jobs = [
  { title: "UI/UX Designer", department: "Design", posted: "Oct 10", applicants: 54, status: "Open" },
  { title: "HR Executive", department: "HR", posted: "Oct 2", applicants: 23, status: "Interviewing" },
];

export const candidates = [
  { name: "Chelsi Bell", role: "UI Designer", stage: "Applied", experience: 4, location: "Remote" },
  { name: "John Doe", role: "HR Executive", stage: "Interview", experience: 3, location: "Onsite" },
];

export const offerData = [
  { name: "Chelsi Bell", status: "Pending" },
  { name: "John Doe", status: "Accepted" },
];


export const recruitmentAnalytics = [
  { job: "Frontend Developer", value: 30 },
  { job: "Backend Developer", value: 20 },
  { job: "UI/UX Designer", value: 15 },
  { job: "QA Engineer", value: 10 },
];