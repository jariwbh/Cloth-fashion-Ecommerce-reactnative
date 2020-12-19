import AsyncStorage from '@react-native-community/async-storage';

async function getLocaladdtocardlist() {
    const localAddtocardlists = await AsyncStorage.getItem('@addtocardlist');
    return JSON.parse(localAddtocardlists)
}

async function getLocalAddtocardlistByID(currentAddtocardlistId) {
    let localAddtocardlists = await getLocaladdtocardlist();
    let foundAddtocardlist
    if (localAddtocardlists) {
        foundAddtocardlist = localAddtocardlists.find(x => x._id === currentAddtocardlistId)
    }
    return foundAddtocardlist
}

async function saveLocalAddtocardlist(currentAddtocardlist) {
    let localAddtocardlists = await getLocaladdtocardlist();
    let filteredAddtocardlists = []
    if (localAddtocardlists) {
        filteredAddtocardlists = localAddtocardlists.filter(x => x._id !== currentAddtocardlist._id)
    }
    if (!filteredAddtocardlists) {
        filteredAddtocardlists = [];
    }
    filteredAddtocardlists.push(currentAddtocardlist);
    AsyncStorage.setItem('@addtocardlist', JSON.stringify(filteredAddtocardlists));
}

async function removeLocalAddtocardlist(currentAddtocardlistObj) {
    let localAddtocardlists = await getLocaladdtocardlist();
    let filteredWishLists = []
    if (localAddtocardlists) {
        filteredWishLists = localAddtocardlists.filter(x => x._id !== currentAddtocardlistObj._id)
        AsyncStorage.setItem('@addtocardlist', JSON.stringify(filteredWishLists));
    }
}

export { getLocaladdtocardlist, getLocalAddtocardlistByID, saveLocalAddtocardlist, removeLocalAddtocardlist }