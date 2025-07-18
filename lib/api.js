import axios from "axios"

export  const getEmployees = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/users?limit=20');
        const employees = response.users;
        return employees.map(emp => ({
            id: emp.id,
            name: `${emp.firstName} ${emp.lastName}`,
            age: emp.age,
            email: emp.email,
            department: emp.company.department,
            rating: Math.ceil(Math.random() * 5),
            bio: 'Enim enim consectetur mollit ullamco occaecat cillum enim duis sunt proident anim amet et. Aliquip ex ad esse sit esse reprehenderit officia dolore elit est. Amet adipisicing cillum pariatur cillum. Aliquip qui amet ut ut aliqua magna laborum velit cillum id nostrud proident. Ad amet ullamco mollit est mollit adipisicing ipsum nisi dolor exercitation dolor sunt dolor. Est eiusmod irure Lorem Lorem culpa.'
        }))
    } catch (error) {
        console.log(error);
    }
}


export const getEmployeesByID = async (id) => {
    const employees = await getEmployees();
    return employees.find(emp => emp.id === id);
}