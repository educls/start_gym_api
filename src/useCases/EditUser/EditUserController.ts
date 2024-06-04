import { EditUserUseCase } from "./EditUserUseCase";
import { request, Response } from "express";

export class EditUserController {
  constructor(
    private editUserUseCase: EditUserUseCase,
  ) { }

  async handle(request: any, response: Response): Promise<Response> {
    const id = request.user.id;
    const { photo, name, numWhats, email, password } = request.body;
    let affectedRows: number = 0;

    try {
      if (photo) {
        const rows: number = await this.editUserUseCase.execute({ id, column: 'photo', value: photo });
        affectedRows += rows;
      }
      if (name) {
        const rows: number = await this.editUserUseCase.execute({ id, column: 'name', value: name });
        affectedRows += rows;
      }
      if (numWhats) {
        const rows: number = await this.editUserUseCase.execute({ id, column: 'numberwhats', value: numWhats });
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
        return response.status(201).json({ message: 'Usuário Editado' });
      }
      return response.status(200).json({ message: 'Nenhum Usuário Editado' })

    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected Error'
      });
    }
  }
}