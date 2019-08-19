let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {





    callback(null, { "message": "Successfully executed .." });
}