const fetch = require('node-fetch');

const headers = {
    'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
    'Content-Type': 'application/json',
};

const getData = async () => {
    const request = await fetch('https://raw.githubusercontent.com/jochemkeller/prikdata/main/data.json');

    return await request.json();
};

const getConclusion = (body, data) => {
    if (body.indication) {
        return data.indication >= Number.parseInt(body.dob);
    }

    if (body.past) {
        return data.past >= Number.parseInt(body.dob);
    }

    return data.dob >= Number.parseInt(body.dob);
};

exports.handler = async (event, context, callback) => {
    event = event || {};

    const { body = '' } = event;

    if (!body) {
        return callback(null, {
            statusCode: 422,
            headers,
            body: JSON.stringify('Geen correcte data meegestuurd!'),
        });
    }

    try {
        const data = await getData();
        const conclusion = getConclusion(JSON.parse(body), data);

        return callback(null, {
            statusCode: 200,
            headers,
            body: JSON.stringify(conclusion),
        });
    } catch (error) {
        return callback(null, {
            statusCode: 422,
            headers,
            body: String(error),
        });
    }
};
