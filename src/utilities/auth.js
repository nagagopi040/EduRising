import { AsyncStorage } from "react-native";

const auth = {
    async onSignIn(key, item) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(item))
            return true
        } catch (err) {
            return err
        }
        return
    },
    async onSignOut(key) {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (exception) {
            return exception;
        }
        return
    },
    async isSignedIn(key) {
        try {
            const retrievedItem =  await AsyncStorage.getItem(key);
            const item = JSON.parse(retrievedItem);
            if(item != null){
                return true
            } else {
                return false
            }
        } catch (exception) {
            return false
        }
        return
    },
    async getTheToken(key) {
        try {
            const retrievedItem =  await AsyncStorage.getItem(key);
            const item = JSON.parse(retrievedItem);
            if(item != null){
                return item
            } else {
                return false
            }
        } catch (exception) {
            return exception
        }
        return
    },
}

export default auth