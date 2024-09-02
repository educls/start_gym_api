import { Response } from "express";

export abstract class Controller {

  handleError(status: number, message: string | undefined, response: Response){
    return response.status(status).json({
      message: message || 'Unexpected Error'
    })
  }
  handleSuccess(body: any, response: Response){
    return response.status(200).json(body)
  }
}
