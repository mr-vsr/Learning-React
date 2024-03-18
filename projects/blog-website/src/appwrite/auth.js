
import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

//A class containing all the authentication services. Using  a object of the class we can use any of the service.
export class AuthService {
    client = new Client();//This is the client and we proceed further when a client is created.
    account; //This is a account for a particular client.

    //Constructor to initialize a new client whenever the object of this class is created and create an account for that client.
    constructor() {
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
    }

    //This is a async function to create account which takes an object as parameter and is dereferenced 
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, name); //to create accouht appwrite has account.create() method
            if (userAccount) {
                //call another method
                return this.login({email, password});
            }
            else {
                return userAccount;
            }
        } catch (error) {
            // throw error;
            console.log("Appwrite error : : createAccount error : : error ", error);
        }
    }
    //This function is used to log in a user 
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);//Appwrite provides account.createEmailSession() to create a session for the user
            
        } catch (error) {
            // throw error;
            console.log("Appwrite error : : login error : : error ", error);
        }
    }

    //This function get hold of the current user and can be used to check whether the user surfing the website is logged in or not
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite error :: getCurrentUser :: error", error);
        }

        return null;
    }

    //This function is used to logging out a user
    async logout() {
        try {
            await this.account.deleteSessions();//Appwrite provides account.deleteSessions() method which deletes all the sessions pertaining to that particular user
        } catch (error) {
            console.log("Appwrite error : : logout error : : error ",error)
        }
    }
}

const authService = new AuthService();
export default authService;