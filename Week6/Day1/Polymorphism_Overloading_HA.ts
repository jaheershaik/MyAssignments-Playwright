class APIClient{

    //overload with single argument
    sendRequest(endpoint:string):void;
    //overload method with multiple arguments
    sendRequest(endpoint: string, requestBody: string, requestStatus: boolean):void;

    // method implementation
    sendRequest(endpoint:string, requestBody?:string, requestStatus?: boolean):void{
        if(requestBody ===undefined){
            console.log(`Endpoint: ${endpoint}`)
            console.log('Sending Request')
        }else {
            console.log(`Endpoint: ${endpoint}`)
            console.log(`Request Body: ${requestBody}`)
        
             if (requestStatus == true){
                 console.log(`requestStatus: Success`)
            }
            else{
                console.log('requestStatus: Failed')
            }   
        }
    }

    //demonstrating Overloading
    demonstrateOverloading(): void{
        // calling sendRequest with endpoint argument
        this.sendRequest("home/login")   
        //calling sendRequest with endpoint, requestbody, requestStatus arguments
        this.sendRequest("home/login",'{"name": "Jaheer"}', true)
    }
}

// create a object of APIClient
const apiUser = new APIClient();
// calling overloading methods with different sets of data
apiUser.sendRequest('main/home')
apiUser.sendRequest('home/user', '{"name":"Basha"}', false)

//calling demonstate method

apiUser.demonstrateOverloading();



