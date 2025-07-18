import useBookmarksStore from "@/store/BookmarkStore";


const useBookmarks = () => {
 const {bookmarks,addBookmar,removeBookmarks} = useBookmarksStore();
 return {bookmarks,addBookmar,removeBookmarks}
}

export default useBookmarks