import App from "./server/app";

const PORT = 3000 || process.env.PORT;
const expressApp = new App();

expressApp.app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})

expressApp.setClient(process.cwd() + '/dist/client/');


