const OFFERS_URL = "http://localhost:5500/offers/"


export const CreateOffer = async (form) => {
    const request = await fetch(OFFERS_URL, {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(form),
        credentials: 'include',
    });
    const response = await request.json();
    console.log(response);
}

export const ListOffers = async () => {
    const request = await fetch(OFFERS_URL, {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
        
    });

    const response = await request.json();
    console.log(response);
    return(response);
}

