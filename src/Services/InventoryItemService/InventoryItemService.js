import appConfig from '../../Helpers/appConfig'

const InventoryItemService = (id) => {
    console.log('id', id)
    let body

    if (id != null) {
        body =
        {
            "search": [{
                "searchfield": "offertype",
                "searchvalue": id,
                "criteria": "eq",
                "datatype": "ObjectId"
            }]
        }

    } else {
        body =
        {
            "search": [{
                "searchfield": "status",
                "searchvalue": "active",
                "criteria": "eq",
                "datatype": "text"
            }]
        }
    }

    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };

    return fetch(appConfig.baseUrl + 'inventoryitems/filter', requestOptions)
        .then(response => response.json()).catch(error => {
            console.error('There was an error!', error);
        });
}

export { InventoryItemService };