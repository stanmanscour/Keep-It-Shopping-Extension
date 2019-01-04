import * as firebase from "firebase";
import { loadArticles } from '../actions/actions'

class db {
    static firebase = null;
    static userIdentity = null;
    static userListId = null;
    static _config = {
        apiKey: "AIzaSyA4CocWVq17ZrcMDgSxPU68Ogecj7O4G84",
        authDomain: "shopping-extension.firebaseapp.com",
        databaseURL: "https://shopping-extension.firebaseio.com",
        projectId: "shopping-extension",
        storageBucket: "shopping-extension.appspot.com",
        messagingSenderId: "90813169764"
    };

    static storeUser () {
        db.userIdentity = db.getUserIdentity();
        
        let shoppingList = db.firebase.database().ref(`users/${db.userIdentity}/shoppingList`).once('value', snapshot => {
            if (!snapshot.exists()){
                db.createNewList(db.userIdentity);
            } else {
                db.userListId = snapshot.val();
            }
        })
    }

    static getUserIdentity () {
        return 'stan';
    }

    static connect () {
        db.firebase = firebase.initializeApp(this._config);
        this.storeUser(); 
        console.log('connected');
    }

   static createNewList(username: string){
       // create new reference and save the key
       db.userListId = db.firebase.database().ref('shoppingLists/').push().key;

        // save in /shoppingLists/ a new object
       db.firebase.database().ref(`shoppingLists/${db.userListId}`).set({
           author: username,
           shoppingList: true
       })

       this.writeUserData(this.userIdentity, {
           shoppingList: db.userListId
       })
   }

   static editItem(item){
       const itemId = item.id;
       delete item.id;
       return new Promise((resolve, reject) => {
        db.firebase.database().ref(`shoppingLists/${this.userListId}/${itemId}`).set({
            ...item
        })
        resolve();
       })
   }

   static storeNewItem(object){
        db.firebase.database().ref(`shoppingLists/${this.userListId}/`).push().set(object);
   }

    static writeUserData(string, object){
        db.firebase.database().ref('users/' + string).set(object);
    }

    static fetchItems(){
        const userList = db.firebase.database().ref(`shoppingLists/${this.userListId}/`);
        return new Promise(((resolve, reject) => {
            userList.on('value', snapshot => {
                resolve(snapshot.val()); 
            })
        }))
    }
}

export default db;
