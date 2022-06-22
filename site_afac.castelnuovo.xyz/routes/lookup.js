const express = require('express');
const router = express.Router({ mergeParams: true });

const dayjs = require('dayjs');
const jq = require('node-jq');

const lookup = (frameNumber) => {
    const currentDay = dayjs().format('DD-MM-YYYY');

    const response = fetch(
        `https://verlorenofgevonden.nl/scripts//ez.php?q=${frameNumber}&org=&date_from=01-01-2021&date_to=${currentDay}&from=0&site=nl`
    ).then((response) => response.json());

    // TODO: fix ObjectId
    const filter = `.hits.hits[0]._source | {
        objectnr: .ObjectNumber,
        storage: .StorageLocation | {
            name: .Name,
            adres: .Streetname,
            postcode: .Zipcode,
            city: .City,
            phone: .Phone,
            website: .WebsiteUrl,
            instructions: .Instructions
        },
        bike: {
            img_url: "https://www.verlorenofgevonden.nl/assets/image/(.ObjectId)",
            color: .Color,
            description: .Description
        }
    }`;

    const parsedResponse = response.then((data) => {
        return jq.run(filter, data, {
            input: 'json',
            output: 'json',
        });
    });

    return parsedResponse;
};

router.get('/', (req, res, next) => {
    const frameNumber = req.params.frameNumber;

    // TODO: validate inputs
    // frameNumber (int)

    lookup(frameNumber).then((data) => {
        res.send(data);
    });
});

router.post('/', (req, res, next) => {
    const frameNumber = req.body.frameNumber;

    // TODO: validate inputs
    // frameNumber (int)

    lookup(frameNumber).then((data) => {
        res.send(data);
    });
});

module.exports = router;
