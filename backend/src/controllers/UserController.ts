import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    name: "Arthur",
    email: "arthurlage2006@gmail.com",
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
    };

    users.push(newUser);

    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: newUser.name,
        email: newUser.email,
      },
      message: {
        subject: "Bem vindo ao sistema!",
        body: "Agradecemos o seu cadastro na plataforma X\n\nSeja bem vindo!",
      },
    });

    return res.sendStatus(201);
  },
};
