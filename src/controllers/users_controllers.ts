import { Request, Response } from "express";
import path from "path";
const users_service = require('../services/users_services')
import Responses from '../helpers/resp_class';
const gera_id = require('../utils/generate/generate_code');

const Resp = new Responses();


exports.post = async (req: Request, res: Response) => {
    try {
        const { accountType, photo, name, numWhats, email, password } = req.body;
        const result = await users_service.postUser(accountType, photo, name, numWhats, email, password);

        if (result == undefined) {
            Resp.resp401(res, 'Usuario não Cadastrado');
        } else if (result.affectedRows == 1) {
            res.status(201).json({ mensagem: "Usuario Cadastrado", data: result });
        }

    } catch (err) {
        console.log(err);
    }
}

exports.signUpProfessor = async (req: Request, res: Response) => {
    try {
        const { name, email, password, teachertype } = req.body;

        const result = await users_service.postNewTeacher(name, email, password, teachertype);

        if (result == undefined) {
            Resp.resp401(res, 'Professor não Cadastrado');
        } else if (result.affectedRows == 1) {
            res.status(201).json({ mensagem: "Professor Cadastrado", data: result });
        }

    } catch (err) {
        console.log(err);
    }
}

exports.signUpAluno = async (req: Request, res: Response) => {
    try {
        const { token, name, email, password } = req.params;

        const result = await users_service.postNewAluno(name, email, password);

        if (result == undefined) {
            Resp.resp401(res, 'Aluno não Cadastrado');
        } else if (result.affectedRows == 1) {
            res.status(201).json({ mensagem: "Aluno Cadastrado", data: result });
        }

    } catch (err) {
        console.log(err);
    }
}

exports.putUser = async (req: any, res: Response) => {
    try {
        const userID: number = req.user.id;
        const { photo, name, numWhats, email, password } = req.body;
        let affectedRows: number = 0;

        if (photo) {
            const result = await users_service.updateUserPhoto(userID, photo);
            affectedRows += result.affectedRows;
        }
        if (name) {
            const result = await users_service.updateUserName(userID, name);
            affectedRows += result.affectedRows;
        }
        if (numWhats) {
            const result = await users_service.updateUserNumberWhats(userID, numWhats);
            affectedRows += result.affectedRows;
        }
        if (email) {
            const result = await users_service.updateUserEmail(userID, email);
            affectedRows += result.affectedRows;
        }
        if (password) {
            const result = await users_service.updateUserPassword(userID, password);
            affectedRows += result.affectedRows;
        }

        if (affectedRows > 0) {
            Resp.resp201(res, 'Usuario Atualizado');
        } else {
            Resp.resp401(res, 'Nenhum usuario atualizado');
        }
    } catch (err) {
        console.log("Erro no server:", err)
        Resp.resp500(res, 'Erro no servidor');
    }
}

exports.postResetPassword = async (req: Request, res: Response) => {
    try {

        const result = await users_service.resetPasswordUser(req.body.email, req.body.newPassword);

        if (result.affectedRows > 0) {
            res.sendFile(path.join(__dirname, '../pages', 'sucessfull.html'));
        } else {
            Resp.resp401(res, 'Não foi possivel redefinir a senha');
        }

    } catch (err) {
        console.log(err);
        Resp.resp500(res, 'Ocorreu um erro ao redefinir a senha');
    }
}

exports.sendQuestionary = async (req: any, res: Response) => {
    try {
        let id_user = req.user.id;
        if (req.user.accounttype == 'professor') {
            id_user = req.params.idAluno;
        }
        console.log(id_user);
        const typeQuestionary = req.params.type;
        let result;
        console.log(req.body);
  
        switch (typeQuestionary) {
            case 'avaliacao_fisica':
                const { Objetivos, Peso, Altura, Nascimento } = req.body;
                result = await users_service.insertQuestionaryAvaliacaoFisica(id_user, Objetivos, Peso, Altura, Nascimento);
                break;
            case 'historico_doencas':
                const { Doencas, Dores, Adicional } = req.body;
                result = await users_service.insertQuestionaryHistoricoDoencas(id_user, Doencas, Dores, Adicional);
                break;
            case 'historico_atividades':
                const { AtividadeFisica, Dieta, Suplementos, Fuma, BebidaAlcoolica, MedicamentoControlado, Cirurgia } = req.body;
                result = await users_service.insertQuestionaryHistoricoAtividades(id_user, AtividadeFisica, Dieta, Suplementos, Fuma, BebidaAlcoolica, MedicamentoControlado, Cirurgia);
                break;
            case 'minha_evolucao':
                const { Foto1, Foto2, Foto3 } = req.body;
                result = await users_service.insertQuestionaryMinhaEvolucao(id_user, Foto1, Foto2, Foto3);
                break;
            default:
                break;
        }
        if (result.affectedRows == 1) {
            Resp.resp201(res, 'Questionario Salvo');
        }else{
            Resp.resp400(res, 'Questionario não Salvo');
        }

    } catch (err) {
        console.log(err);
        Resp.resp500(res, 'Ocorreu um erro no servidor');
    }
}
exports.getQuestionary = async (req: any, res: Response) => {
    try {
        let id_user = req.user.id;
        if (req.user.accounttype == 'professor') {
            id_user = req.params.idAluno;
        }


        const typeQuestionary = req.params.type;
        
        let result = await users_service.selectQuestionary(id_user, typeQuestionary);

        if (typeQuestionary === 'minha_evolucao') {
            for (let index = 0; index < result.length; index++) {
                let element = result[index];
                for (let indexj = 1; indexj <= 3; indexj++) {
                    let el = element[`foto${indexj}`];
                    if (el !== null) {
                        let base64Img: string = el.toString('utf-8');
                        element[`foto${indexj}`] = base64Img;
                    }
                }
                result[index] = element;
            } 
            console.log(result);
        }
        
        if (result) {
            Resp.resp201(res, result);
        }else{
            Resp.resp400(res, 'Questionario não Encontrado');
        }

    } catch (err) {
        console.log(err);
        Resp.resp500(res, 'Ocorreu um erro no servidor');
    }
}

exports.get = async (req: any, res: Response) => {
    try {
        let textData: any = '';
        const photoBytesRes = await users_service.getImgUser(req.user.id);
        const result = await users_service.selectUser(req.user.id);

        if (photoBytesRes !== null) {
            textData = photoBytesRes.toString('utf-8');
        }

        if (req.user) {
            Resp.resp200UserInfos(res, result[0], textData);
        } else {
            Resp.resp401(res, 'Token inválido / token expirado')
        }

    } catch (err) {
        console.log(err);
        Resp.resp500(res, 'Ocorreu um erro no servidor');
    }
}

exports.getInfoProfessores = async (req: any, res: Response) => {
    try {
        const result = await users_service.selectProfessores();
        let index = 0;

        result.forEach((element: any) => {
            if (element['foto'] != null) {
                result[index]['foto'] = element['foto'].toString('utf-8');
            }
            index++;
        });

        if (result) {
            Resp.resp200(res, result);
        } else {
            Resp.resp401(res, 'Token inválido / token expirado')
        }

    } catch (err) {
        console.log(err);
        Resp.resp500(res, 'Ocorreu um erro no servidor');
    }
}

exports.getInfoAlunos = async (req: any, res: Response) => {
    try {
        const result = await users_service.selectAlunos();
        let index = 0;

        result.forEach((element: any) => {
            if (element['foto'] != null) {
                result[index]['foto'] = element['foto'].toString('utf-8');
            }
            index++;
        });
        console.log

        if (result) {
            Resp.resp200(res, result);
        } else {
            Resp.resp401(res, 'Token inválido / token expirado')
        }

    } catch (err) {
        console.log(err);
        Resp.resp500(res, 'Ocorreu um erro no servidor');
    }
}