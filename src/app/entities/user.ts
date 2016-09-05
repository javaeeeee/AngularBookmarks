/**
 * A class to store user data.
 * @author Dmitry Noranovich
 */

export class User {
    /**
     * A constructor to create users
     * @argument id Numerinc ID of the user used to identify a user in the backend service.
     * @argument username User name used for login purposes.
     * @argument password the password of the logged-in user, used to access the REST backend.
     * @argument fullName Full name of the user to display on the dashboard.
     * @argument  email User's email used to change password if lost.
     */
    constructor(public id: number, public username: string,
        public password: string, public fullName: string, public email: string) { }
}
