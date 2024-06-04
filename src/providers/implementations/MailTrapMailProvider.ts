import Mail from "nodemailer/lib/mailer";
import { IMessage, ImailProvider } from "../IMailProvider";
import nodemailer from 'nodemailer'

export class MailTrapMailProvider implements ImailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'startgymsuporte@gmail.com',
        pass: 'lqhz sixu xoyy jjxl',
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
      attachments: message.attachments
    })
  }
}