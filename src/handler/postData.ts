import { APIGatewayProxyHandler } from "aws-lambda";
import CreateApi from "../api/createApi";



export const handler = async (event: APIGatewayProxyHandler)=>{

    try {
        console.log(`event received:: ${JSON.stringify(event)}`);

        const response = await new CreateApi().execute(JSON.parse(event.body))
        console.log(`response received from create api layer: ${response}`);
        // const dynamoResponse = await this.
        return {
            statusCode: 201,
            body: "data created"
        }
    } catch (error) {
        console.log(`error occurred while executing typescript:: ${error}`);
        throw error;
    }
}