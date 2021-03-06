import {IBookmark} from '../entities/bookmark';

/**
 * A class to store mock bookmarks.
 */
export const BOOKMARKS: IBookmark[] = [
    {
        id: 1,
        url: 'http://github.com',
        description: 'A lot of great projects.'
    },
    {
        id: 2,
        url: 'http://economist.com',
        description: 'Cool reading'
    },
    {
        id: 3,
        url: 'http://time.com',
        description: 'Some news'
    }
];
