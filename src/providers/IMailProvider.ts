interface IAddress {
  email: string;
  name: string;
}

export interface attachments {
  filename: string;
  path: string;
  cid: string;
}

export interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
  attachments: attachments[]
}


export interface ImailProvider {
  sendMail(message: IMessage): Promise<void>
}