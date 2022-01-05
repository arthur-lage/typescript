"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailService_1 = __importDefault(require("../services/EmailService"));
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
exports.default = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json(users);
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = {
                name: req.body.name,
                email: req.body.email,
            };
            users.push(newUser);
            const emailService = new EmailService_1.default();
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
            return res.send(users);
        });
    },
};
