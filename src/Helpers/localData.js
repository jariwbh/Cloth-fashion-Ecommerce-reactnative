import AsyncStorage from '@react-native-community/async-storage';

async function getLocalWishList() {
    const localWishLists = await AsyncStorage.getItem('@unsavedWishLists');
    return JSON.parse(localWishLists)
}

function getLocalWishListByID(currentWishListId) {
    let localWishLists = getLocalWishList();
    let foundWishList
    if (localWishLists) {
        foundWishList = localWishLists.find(x => x._id === currentWishListId)
    }
    return foundWishList
}

async function saveLocalWishList(currentWishList) {
    console.log('currentWishList', currentWishList)
    let localWishLists = await getLocalWishList();
    console.log('localWishLists', localWishLists)
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

function removeLocalWishList(currentWishListID) {
    let localWishLists = getLocalWishList();
    let filteredWishLists = []
    if (localWishLists) {
        filteredWishLists = localWishLists.filter(x => x._id !== currentWishListID)
        AsyncStorage.setItem('@unsavedWishLists', filteredWishLists);
    }
}

export { getLocalWishList, getLocalWishListByID, saveLocalWishList, removeLocalWishList }