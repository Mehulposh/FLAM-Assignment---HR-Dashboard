import { create } from "zustand"

const useBookmarksStore = create(set => ({
    bookmarks: [],
    addBookmark: emp => set(state => ({bookmarks: [...state.bookmarks,emp]})),
    removeBookmarks: id => set(state => ({bookmarks: state.bookmarks.filter(e => e.id != id)}))
}))

export default useBookmarksStore