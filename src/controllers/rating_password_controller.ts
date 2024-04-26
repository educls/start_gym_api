import { Request, Response } from "express";

exports.post = async (req: Request, res: Response) => {
    try {
        const { password } = req.body;

        var numeros = /([0-9])/;
        var alfabetoa = /([a-z])/;
        var alfabetoA = /([A-Z])/;
        var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

        if (password.length >= 6 && numeros.test(password) && alfabetoa.test(password) && alfabetoA.test(password) && chEspeciais.test(password)) {
            res.status(200).json(
                { message: "Forte" }
            )
        } else if (password.length >= 6 && (numeros.test(password) || alfabetoa.test(password) || alfabetoA.test(password) || chEspeciais.test(password))) {
            res.status(200).json(
                { message: "Media" }
            )
        } else {
            res.status(200).json(
                { message: "Fraca" }
            )
        }


    } catch (err) {
        console.log(err);
        res.status(500).json(
            { message: "Erro no servidor" }
        );
    }
}