import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from "appwrite";

//A class containing all the methods related to creating, updating and deleting a post
export class Service{
    client = new Client();
    databases;
    bucket;
//Constuructor to initialize a client and datbase and bucket whenever a new object of this class is created
    constructor() {
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //This method is used to create a post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            //Appwrite provides databases.createDocument() method to push a particular content into the collection/ tables we have created
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service : : createPost : : error ", error);
        }
    }

    //This method is used to update  a post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            //Appwrite provide with databases.updateDocument() method for this purpose
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service : : updatePost : : error ", error);
        }
    }

    //This method is used to delete a post
    async deletePost(slug) {
        try {
            //Appwrite provide databases.deleteDocument() method for this purpose
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite serivce : : deletePost : : error ", error);
            return false;
        }
    }

    //This method is used to get a post 
    async getPost(slug) {
        try {
            //Appwrite provides a databases.getDocument() method for this purpose
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service : : getPost : : error ", error);
            return false;
        }
    }


    //This method is used to get all the posts base on their status
    async getPosts(queries = [Query.equal("status" ,"active")]) {
        try {
            //Appwrite provide databases.listDocuments() method for this purpose also we use Query to get only the active posts
            await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite serivce : : getPosts : : error ", error);
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service : : uploadFile : : error ", error);
        }
    }

    async deleteFile(fileId) {
      try {
          await this.bucket.deleteFile(
              conf.appWriteBucketId,
              fileId
          );
          return true;
      } catch (error) {
          console.log("Appwrite service : : deleteFile : : error ", error);
          return false;
      }
    }

    async getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        );
    }
    
}


const service = new Service();
export default service