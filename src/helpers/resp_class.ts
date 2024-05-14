import { Response } from "express";

class Responses {


    async resp200(res: Response, message: any){
        try{
            res.status(200).json({ mensagem: message});
        }catch(err){
            console.log(err)
        }
    }

    async resp200UserInfos(res: Response, message: any, photo: string){
        try{
            res.status(200).json({mensagem: message, photo: photo})
        }catch(err){
            console.log(err)
        }
    }

    async resp201(res: Response, message: any){
        try{
            res.status(201).json({ mensagem: message});
        }catch(err){
            console.log(err)
        }
    }

    async resp400(res: Response, message: any){
        try{
            res.status(400).json({ mensagem: message});
        }catch(err){
            console.log(err)
        }
    }

    async resp401(res: Response, message: any){
        try{
            res.status(401).json({ mensagem: message});
        }catch(err){
            console.log(err)
        }
    }

    async resp402(res: Response, message: any){
        try{
            res.status(402).json({ mensagem: message});
        }catch(err){
            console.log(err)
        }
    }
    
    async resp500(res: Response, message: any){
        try{
            res.status(500).json({ mensagem: message});
        }catch(err){
            console.log(err)
        }
    }
}


export default Responses;