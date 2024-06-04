import { User } from "../../entities/User";
import { ImailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: ImailProvider
  ) { }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const user = new User(data);
    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe Start Gym',
        email: 'startgymsuporte@gmail.com',
      },
      subject: 'Seja bem-vindo',
      body: `
        <p><img src="cid:logo_for_email" width=500></p>
        <br>
        <p>Olá ${data.name},</p>
        <p>Sua conta foi criada com Sucesso</p>
        <br>
        <h3>Agora você pode acessar nosso App</h3>
        <p>Email: ${data.email}</p>
        <p>Email: ${user.password}</p>
        <br>
        <p>Atenciosamente.</p>
        <p>Equipe de suporte</p>
        <p>Start Gym</p>
      `,
      attachments: [
        {
          filename: 'img_logo_email.jpg',
          path: 'src/assets/img_logo_email.jpg',
          cid: 'logo_for_email'
        }
      ]
    })
  }
}