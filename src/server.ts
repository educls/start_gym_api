import { app } from "./app";

// Apenas para deixar o console verde
const greenConsoleLog = (message: string) => {
  console.log(`\x1b[32m${message}\x1b[0m`);
};

app.listen(3000, () => {
  greenConsoleLog(`Server is running on localhost:${3000}`);
});