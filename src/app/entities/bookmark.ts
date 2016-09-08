export interface IBookmark {
    id: number;
    url: string;
    description: string;
}
/**
 * A class to store Bookmarks.
 * @author Dmitry Noranovich
 */
export class Bookmark implements IBookmark {
    /**
     * Overloaded constructors.
     * 
     * @argument id Bookmark id.
     * @argument url Bookmark URL.
     * @argument description Bookmark description.
     * @argument selected shows if the bookmark was selected in the interface, default is false.
     */
    constructor()
    constructor(id: number, url: string, description: string)
    constructor(public id: number = null, public url = '',
        public description = '', public selected = false) { }
}
