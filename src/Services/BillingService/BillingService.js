import appConfig from '../../Helpers/appConfig'

const BillingService = (data) => {
    const body = JSON.stringify(data)
    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: body
    };
    return fetch(appConfig.baseUrl + 'bills', requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });
}

const BillingFilterService = (id) => {
    const body =
    {
        "search": [{
            "searchfield": "customerid",
            "searchvalue": id,
            "criteria": "eq",
            "datatype": "ObjectId"
        }], "sort": { "billnumber": -1 }
    }

    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };

    return fetch(appConfig.baseUrl + 'bills/filter', requestOptions)
        .then(response => response.json()).catch(error => {
            console.error('There was an error!', error);
        });
}

export { BillingService, BillingFilterService };