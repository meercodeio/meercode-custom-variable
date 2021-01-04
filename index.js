const core = require('@actions/core');
const axios = require('axios');

async function main() {
    try {
        const meercodeToken = core.getInput('meercode-token');
        const userDefinedURL = core.getInput('url');

        const runId = process.env.GITHUB_RUN_ID;
        
        const url = 'https://develop.api.meercode.io/api/runs';

        const config = {
            url,
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
                "Authorization": meercodeToken
            },
            data: {
                runId,
                url: userDefinedURL,
            }
        };

        const response = await axios(config);

        console.log(response);
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();
