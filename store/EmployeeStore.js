import { getEmployees } from "@/lib/api";
import { create } from "zustand"

const useEmployeeStore = create((set,get) => ({
    //Employee State
    employees: [],
    filteredEmployees: [],
    isLoading: false,
    error: null,

    //Bookmarks State
    bookmarks: [],

    //Employee Actions

    //fetch employees from api
    fetchEmployees: async () => {
        if(get().employees.length > 0) return ;

        set({ isLoading: true, error: null });

        try {
            const data = await getEmployees();
            set({
                employees: data,
                filteredEmployees: data,
                isLoading: false
            });
        } catch (error) {
            set({
                error: error.message,
                isLoading: false
            });
            console.error('Failed to fetch employees:', error);
        }
    },

    //filter employees based on department and ratings
    filterEmployees: ({departments,ratings}) => {
        const {employees} = get();
        console.log(departments , ratings)

        const filtered = employees.filter(emp => {
        const deptMatch = departments.length === 0 || departments.includes(emp.department);
        const ratingMatch = ratings.length === 0 || ratings.includes(emp.rating);
        return deptMatch && ratingMatch;
        });

        set({
            filteredEmployees: filtered,
            
        })
    },

    //search employees based on name ,email and  department
    searchEmployees: (query) => {
        const {employees} = get();

        if(!query.trim()){
            set({filteredEmployees: employees})
            return;
        }

        const filtered = employees.filter(emp => 
            emp.name.toLowerCase().includes(query.toLowerCase()) ||
            emp.department.toLowerCase().includes(query.toLowerCase()) ||
            emp.email.toLowerCase().includes(query.toLowerCase()) 
        );

        set({
            filteredEmployees: filtered
        })
    },

    //reset all filters and restore the filteredEmployees state
    resetFilters: () => {
        const {employees} = get();
        set({
            filteredEmployees: employees
        })
    },

    //Bookmarks Actions
    addBookmark: emp => set(state => ({bookmarks: [...state.bookmarks,emp]})),
    removeBookmarks: id => set(state => ({bookmarks: state.bookmarks.filter(e => e.id != id)}))
}))

export default useEmployeeStore