import useBookmarksStore from "@/store/BookmarkStore";


const useBookmarks = () => {
 const {bookmarks,addBookmar,removeBookmarks} = useBookmarksStore();
 return {bookmarks,addBookmars,removeBookmarks}
}

export default useBookmarks