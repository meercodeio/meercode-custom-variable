const core = require('@actions/core');
const axios = require('axios');

async function main() {
    try {
        const meercodeToken = core.getInput('meercode-token');
        const userDefinedURL = core.getInput('url');

        const runId = process.env.GITHUB_RUN_ID;
        
        const url = 'https://api.meercode.io/api/run';

        const config = {
            url,
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
                "meercode-token": meercodeToken
            },
            data: {
                runId,
                url: userDefinedURL,
            }
        };
        await axios(config);
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();
