export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-west-2",
        BUCKET: "notes-app-uploads-nick2"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://8liqw3hh6h.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_z9hWdxdD5",
        APP_CLIENT_ID: "6m6i2l4h0dl3hm4piih1vukmrj",
        IDENTITY_POOL_ID: "us-west-2:ca28cde1-ddf2-48a7-ab13-b2af31c6d356"
    }
};