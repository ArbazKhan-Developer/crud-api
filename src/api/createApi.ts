import DynamoDao from "../dao/dynamoDao"

interface Event {
    id: string
    productName: string
    expiry: string
    count: number
}


class CreateApi {


    async execute(event: Event): Promise<void>{
        try {
            console.log(`create api called:: ${JSON.stringify(event)}`);
            await new DynamoDao().postData(event);
            return;
        } catch (error) {
            console.log(`error in api layer: ${error}`);
            
        }
    }
}

export default CreateApi;