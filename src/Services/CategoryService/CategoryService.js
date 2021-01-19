import appConfig from '../../Helpers/appConfig'

const CategoryService = () => {
    const body =
    {
        "search": [{
            "searchfield": "formid",
            "searchvalue": "5e058897b0c5fb2b6c15cc69",
            "criteria": "eq",
            "datatype": "ObjectId"
        }
        ], "sort": { "createdAt": 1 }, "formname": "poscategory"
    }

    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };

    return fetch(appConfig.baseUrl + 'formdatas/filter', requestOptions)
        .then(response => response.json()).catch(error => {
            console.error('There was an error!', error);
        });
}

export { CategoryService };