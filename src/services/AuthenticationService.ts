

let instance: null | AuthenticationService = null;

export class AuthenticationService {

    connectedUser: any;
    
    constructor() {
        // Make this a singleton
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    logMeIn(username: string, password: string): any {
        fetch('http://localhost:5001/api/auth')
            .then(response => response.json());

        this.connectedUser = { username }
    }

    isLoggedIn(): boolean {
        return !this.connectedUser;
    }    
    
    get connecteduser(): any {
        return this.connectedUser;
    }

}

export default AuthenticationService;
