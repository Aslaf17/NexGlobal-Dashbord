export const employeesData = [
    { id: "EMP001", name: "Alice Johnson", department: "Finance", role: "Manager", status: "Active" },
    { id: "EMP002", name: "Bob Smith", department: "IT", role: "Developer", status: "On Leave" },
    { id: "EMP003", name: "Clara Wong", department: "HR", role: "Recruiter", status: "Active" },
    { id: "EMP004", name: "Daniel Kim", department: "Marketing", role: "Analyst", status: "Probation" },
    { id: "EMP005", name: "Eva Martinez", department: "Sales", role: "Sales Exec", status: "Active" },
];

export const departmentData = [
    { name: "Finance", value: 10 },
    { name: "IT", value: 25 },
    { name: "HR", value: 15 },
    { name: "Marketing", value: 20 },
    { name: "Sales", value: 30 },
];

export const statsData = (employees) => [
    { title: "Total Employees", value: employees.length },
    { title: "Departments", value: 5 },
    { title: "New Hires", value: 4 },
    { title: "On Leave Today", value: employees.filter((e) => e.status === "On Leave").length },
];