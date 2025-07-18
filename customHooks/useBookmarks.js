import useBookmarksStore from "@/store/Employee";


const useBookmarks = () => {
 const {bookmarks,addBookmar,removeBookmarks} = useBookmarksStore();
 return {bookmarks,addBookmar,removeBookmarks}
}

export default useBookmarks