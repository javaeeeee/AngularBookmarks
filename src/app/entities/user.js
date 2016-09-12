/**
 * A class to store user data.
 * @author Dmitry Noranovich
 */
"use strict";
var User = (function () {
    /**
     * A constructor to create users
     * @argument id Numerinc ID of the user used to identify a user in the backend service.
     * @argument username User name used for login purposes.
     * @argument password the password of the logged-in user, used to access the REST backend.
     * @argument fullName Full name of the user to display on the dashboard.
     * @argument  email User's email used to change password if lost.
     */
    function User(id, username, password, fullName, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map