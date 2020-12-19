import AsyncStorage from '@react-native-community/async-storage';

async function getLocalWishList() {
    const localWishLists = await AsyncStorage.getItem('@unsavedWishLists');
    return JSON.parse(localWishLists)
}

async function getLocalWishListByID(currentWishListId) {
    let localWishLists = await getLocalWishList();
    let foundWishList
    if (localWishLists) {
        foundWishList = localWishLists.find(x => x._id === currentWishListId)
    }
    return foundWishList
}

async function saveLocalWishList(currentWishList) {
    let localWishLists = await getLocalWishList();
    let filteredWishLists = []
    if (localWishLists) {
        filteredWishLists = localWishLists.filter(x => x._id !== currentWishList._id)
    }
    if (!filteredWishLists) {
        filteredWishLists = [];
    }
    filteredWishLists.push(currentWishList);
    AsyncStorage.setItem('@unsavedWishLists', JSON.stringify(filteredWishLists));
}

async function removeLocalWishList(currentWishListObj) {
    let localWishLists = await getLocalWishList();
    let filteredWishLists = []
    if (localWishLists) {
        filteredWishLists = localWishLists.filter(x => x._id !== currentWishListObj._id)
        AsyncStorage.setItem('@unsavedWishLists', JSON.stringify(filteredWishLists));
    }
}

export { getLocalWishList, getLocalWishListByID, saveLocalWishList, removeLocalWishList }