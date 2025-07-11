import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const Client = new DynamoDBClient({region: 'ap-south-1'});
const ddb = DynamoDBDocumentClient.from(Client)

const tableName = process.env.TABLE_NAME || "my-product-table-dev"


class DynamoDao {


    async postData(event: any): Promise<void>{
        try {
            const commond = new PutCommand({
                TableName: tableName,
                Item: event
            })

            const response = await ddb.send(commond);
            console.log(`item inserted:: ${response}`);
            return;
        } catch (error) {
            console.log(`error occurred while inserting record to dynamoDB: ${error}`);
            throw error;
        }
    }
}

export default DynamoDao;