"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
console.log('Launching app...');
const app = new App_1.App();
app.run().then(() => {
    console.log("App closed");
});
//# sourceMappingURL=index.js.map