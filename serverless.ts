import type { AWS } from "@serverless/typescript";
import { handler } from "./src/handler/postData";

const serverlessConfiguration: AWS = {
    service: 'crud-api',
    frameworkVersion: '>=4.0.0',
    provider: {
        name: 'aws',
        runtime: 'nodejs18.x',
        region: 'ap-south-1',
        iamRoleStatements: [
            {
                Effect: 'Allow',
                Action: ['dynamodb: *'],
                Resource: '*'
            }
        ]
    },
    functions: {
        postRecord: {
            handler: 'src/handler/postData.handler',
            events: [{
                http: {
                    path: 'record',
                    method: 'post'
                }
            }]
        }
    },
    package: {individually: true},
    custom: {
        esbuild: {
            bundel: true,
            minify: false,
            sourcemap: true,
            target: 'node18',
            platform: 'node'
        }
    },
    resources: {
        Resources: {
            MyDynamoDBTable: {
                Type: 'AWS::DynamoDB::Table',
                Properties: {
                    TableName: 'my-product-table-dev',
                    AttributeDefinitions: [
                        {
                            AttributeName: 'id',
                            AttributeType: 'S'
                        }
                    ],
                    KeySchema: {
                        AttributeName: 'id', 
                        KeyType: 'HASH'
                    },
                    BillingMode: 'PAY_PER_REQUEST'
                }
            }
        }
    }

}


export default serverlessConfiguration;
