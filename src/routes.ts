import { Router } from "express";
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { Request, Response } from 'express';

const router = Router()

// Configurações do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Start Gym API',
      version: '1.0.0',
      description: 'Documentação'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desenvolvimento'
      }
    ]
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Responde com um formulario HTML para a realização da redefinição de senha
router.get('/reset-password', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'pages', 'reset-password.html'));
});

// Rota de teste
router.get('/helloworld', (req: Request, res: Response) => {
  res.status(200).json({ mensagem: 'Hello, world!' });
});

// Rotas
router.use('/login', require('./routes/login_routes'));
router.use('/usuarios', require('./routes/users_routes'));
router.use('/send-email-reset-password', require('./routes/recovery_password_routes'));
router.use('/verifica-forca-senha', require('./routes/rating_password_routes'));
router.use('/verifica-email', require('./routes/verify_email_routes'));
router.use('/confirmar-email', require('./routes/confirm_email_routes'));
router.use('/check-if-email-is-verified', require('./routes/check_ifEmail_isVerified_routes'));

export { router }