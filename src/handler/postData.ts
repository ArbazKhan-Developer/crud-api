import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuidv4 } from "uuid";
const id = uuidv4()


export const handler: APIGatewayProxyHandler = async (event)=>{

    try {
        console.log(`event received:: ${event}`);
        console.log(`id:: ${id}`);
        
        return {
            statusCode: 201,
            body: "data created"
        }
    } catch (error) {
        console.log(`error occurred while executing typescript:: ${error}`);
        throw error;
    }
}