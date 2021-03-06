import appConfig from '../../Helpers/appConfig'

const InventoryItemService = (id) => {
    let body

    if (id != null) {
        body =
        {
            "search": [{
                "searchfield": "category",
                "searchvalue": id,
                "criteria": "eq",
                "datatype": "ObjectId"
            }, { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }
            ]
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

    return fetch(appConfig.baseUrl + 'billitems/filter', requestOptions)
        .then(response => response.json()).catch(error => {
            console.error('There was an error!', error);
        });
}

export { InventoryItemService };