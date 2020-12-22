import appConfig from '../../Helpers/appConfig'

const membershipoffersService = (id) => {

    console.log('id', id)
    const body =
    {
        "search": [{
            "searchfield": "itemid",
            "searchvalue": id,
            "criteria": "eq",
            "datatype": "ObjectId"
        }]
    }

    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };
    return fetch(appConfig.baseUrl + 'membershipoffers/filter', requestOptions)
        .then(response => response.json()).catch(error => {
            console.error('There was an error!', error);
        });
}

export { membershipoffersService };