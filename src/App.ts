export class App {
    async run(){
        console.log("Application running...");

        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Application finished running");    

    }
}