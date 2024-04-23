import express from 'express';
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Apenas para deixar o console verde
const greenConsoleLog = (message: string) => {
  console.log(`\x1b[32m${message}\x1b[0m`);
};


// Responde com um formulario HTML para a realização da redefinição de senha
app.get('/reset-password', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'reset-password.html'));
});



// Rota de teste
app.get('/helloworld', (req, res) => {
  res.status(200).json({ mensagem: 'Hello, world!' });
});

// Rotas

app.use('/login', require('./routes/login_routes'));
app.use('/usuarios', require('./routes/users_routes'));
app.use('/send-email-reset-password', require('./routes/password_routes'));


// Onde o servidor está rodando
app.listen(PORT, () => {
  greenConsoleLog(`Server is running on localhost:${PORT}`);
});