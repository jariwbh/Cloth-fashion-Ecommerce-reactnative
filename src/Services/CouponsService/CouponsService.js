import appConfig from '../../Helpers/appConfig'

const CouponsService = () => {
    const body =
    {
        "search": [{
            "searchfield": "status",
            "searchvalue": "active",
            "criteria": "eq"
        }]
    }

    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };

    return fetch(appConfig.baseUrl + 'coupons/filter', requestOptions)
        .then(response => response.json()).catch(error => {
            console.error('There was an error!', error);
        });
}

export { CouponsService };