import { App } from "./App"
console.log('Launching app...')

const app = new App()
app.run().then(() => {
    console.log("App closed")
});