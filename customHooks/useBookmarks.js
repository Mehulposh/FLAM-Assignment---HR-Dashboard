import useEmployeeStore from "@/store/EmployeeStore";


const useBookmarks = () => {
 const {bookmarks,toggleBookmark} = useEmployeeStore();
 return {bookmarks,toggleBookmark}
}

export default useBookmarks