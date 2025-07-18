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



    addBookmark: emp => set(state => ({bookmarks: [...state.bookmarks,emp]})),
    removeBookmarks: id => set(state => ({bookmarks: state.bookmarks.filter(e => e.id != id)}))
}))

export default useEmployeeStore