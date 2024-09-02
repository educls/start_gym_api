import { Controller } from "../../controller";
import { EditUserUseCase } from "./EditUserUseCase";
import { request, Response } from "express";

export class EditUserController extends Controller {
  constructor(
    private editUserUseCase: EditUserUseCase,
  ) { 
    super();
   }

  async handle(request: any, response: Response): Promise<Response> {
    const id = request.user.id;
    const { foto, nome, telefone, email, password } = request.body;
    let affectedRows: number = 0;

    try {
      if (foto) {
        const rows: number = await this.editUserUseCase.execute({ id, column: 'foto', value: foto });
        affectedRows += rows;
      }
      if (nome) {
        const rows: number = await this.editUserUseCase.execute({ id, column: 'nome', value: nome });
        affectedRows += rows;
      }
      if (telefone) {
        const rows: number = await this.editUserUseCase.execute({ id, column: 'telefone', value: telefone });
        affectedRows += rows;
      }
      if (email) {
        const rows: number = await this.editUserUseCase.execute({ id, column: 'email', value: email });
        affectedRows += rows;
      }
      if (password) {
        const rows: number = await this.editUserUseCase.execute({ id, column: 'password', value: password });
        affectedRows += rows;
      }

      if (affectedRows > 0) {
        return super.handleSuccess('Usuário Editado', response);
        // return response.status(201).json({ message: 'Usuário Editado' });
      }
      return super.handleSuccess('Nenhum Usuário Editado', response);
      // return response.status(200).json({ message: 'Nenhum Usuário Editado' })

    } catch (err: any) {
      return super.handleError(400, err.message || 'Unexpected Error', response);
      // return response.status(400).json({
      //   message: err.message || 'Unexpected Error'
      // });
    }
  }
}