import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt, { verify } from "jsonwebtoken";
import { z } from "zod";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const td = z.object({
    DATABASE_URL: z.string(),
    JWT_KEY: z.string() 
})
const db = td.parse(process.env)


export async function login(req:Request, res:Response) {
    const user = req.body
    const newUser = await prisma.usuario.findFirst({
        where: { OR:[
            {
             bi: { equals: user.bi as string}
            },
            {
                telefone: {equals: user.telefone as string}
            },
            {
                numeroAgente: {equals: user.numeroAgente as string}
            }
        ]  },
        include: {
            pessoa: true,
        },
    });
    if (newUser) {
        const passVerify = await bcrypt.compare(user.senha, newUser.senha)
        if(passVerify)
        {
            console.log("Logado!!!!!!!!!!")
            const token = jwt.sign(user, db.JWT_KEY, {expiresIn : '1h'})
            console.log(token);
        }
        else
            console.log("Senha ou Login incorreto!")
    }
    else
        console.log("Usuario Inesistente!")
    
}


export function verifyToken(req:Request, res:Response) {
    const decor = jwt.verify(req.body.token, db.JWT_KEY,(err:any, decoded:any) => {
        if (err) {
            console.error('Erro ao verificar token:', err.message);
            return res.status(401).json({ error: 'Token inválido' });
        }
        console.log(decoded); // Decodifica o payload do token e o coloca no objeto req
    });

}
