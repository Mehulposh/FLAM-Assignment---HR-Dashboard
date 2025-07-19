import useEmployeeStore from "@/store/EmployeeStore";


const useBookmarks = () => {
 const {bookmarks,addBookmark,removeBookmarks} = useEmployeeStore();
 return {bookmarks,addBookmark,removeBookmarks}
}

export default useBookmarks