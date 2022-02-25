const express = require('express');
const faker = require('faker');
const _ = require('lodash');
const {fa} = require("faker/lib/locales");

const app = express();

app.get('/address', (req, res) => {
    const count = req.query.count;
    if (!count) {
        return res
            .status(400)
            .send({errorMsg: 'count query parameter is missing.'});
    }
    res.send(
        _.times(count, () => {
            const name = faker.name;
            const address = faker.address;
            const image = faker.image;
            return {
                firstName: name.firstName(),
                streetAddress: address.streetAddress(),
                avatar: image.imageUrl()
            };
        })
    );
});

app.listen(8080, () => {
    console.log('server started on port 8080');
});
