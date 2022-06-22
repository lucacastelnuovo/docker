const post = async (url, form) => {
    let formData = new FormData(document.querySelector(`form#${form}`));
    let formDataObject = Object.fromEntries(formData.entries());
    let formDataJsonString = JSON.stringify(formDataObject);

    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: formDataJsonString,
    });

    return res.json();
};

document.querySelector('button#lookup').addEventListener('click', () => {
    await post('http://localhost:3000/lookup/x', 'lookupForm').then(data => {
        // TODO: set data in textarea
    });
});
document
    .querySelector('button#subscribe')
    .addEventListener('click', () =>
        post('http://localhost:3000/action/subscribe', 'subscriptionForm')
    );
document
    .querySelector('button#unsubscribe')
    .addEventListener('click', () =>
        post('http://localhost:3000/action/unsubscribe', 'subscriptionForm')
    );
