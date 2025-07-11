// import { APIGatewayProxyHandler } from "aws-lambda";
import CreateApi from "../api/createApi";

interface Event {
    id: string
    productName: string
    expiry: string
    count: number
}



export const handler = async (event: Event)=>{

    try {
        console.log(`event received:: ${JSON.stringify(event)}`);

        await new CreateApi().execute(event)
        
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