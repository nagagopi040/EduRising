import { AsyncStorage } from "react-native";

const USER_KEY = "username";
const PASS_KEY = "password";

const auth = {
    async onSignIn (key, item) {
        try {
            var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item))
            if(jsonOfItem != null){
                return jsonOfItem;
            } else {
                return null;
            }
        } catch (err) {
            console.log(err.message)
        }
    },
    async onSignOut(key) {
        try {
          await AsyncStorage.removeItem(key);
          return true;
        }
        catch(exception) {
          return false;
        }
    },
    async isSignedIn (key) {
        try {
            const retrievedItem =  await AsyncStorage.getItem(key);
            const item = JSON.parse(retrievedItem);
            if(item != null){
                return true
            } else {
                return false
            }
        } catch (err) {
            console.log(err.message)
        }
    },
    async getTheTokens (key) {
        try {
            const retrievedItem =  await AsyncStorage.getItem(key);
            const item = JSON.parse(retrievedItem);
            if(item != null){
                return item
            } else {
                return false
            }
        } catch (err) {
            console.log(err.message)
        }
    },
}

export default auth