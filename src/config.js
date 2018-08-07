const dev = {
    s3: {
        REGION: "us-west-2",
        BUCKET: "notes-app-api-2-dev-attachmentsbucket-qwy7x2p2m96t"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://oz7gph7fe7.execute-api.us-west-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_A3JhX7Nok",
        APP_CLIENT_ID: "6s64tc2v7u7levtlopfj05tkef",
        IDENTITY_POOL_ID: "us-west-2:bb4adff8-c4d2-46e6-a096-a13133eaa508"
    }
};

const prod = {
    s3: {
        REGION: "us-west-2",
        BUCKET: "notes-app-api-2-prod-attachmentsbucket-1u3d5objz11p3"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://fqf9urci3a.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_n7PT5ROtw",
        APP_CLIENT_ID: "3fnj6feqktpuo9cn67pl3chg4b",
        IDENTITY_POOL_ID: "us-west-2:ae271074-d3ae-430f-8b9b-b2f80b12b32b"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};