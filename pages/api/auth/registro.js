/* eslint-disable import/no-anonymous-default-export */

import connectDB from '../../../utils/connectDB'
import Users from '../../../models/userModel'
import validar from '../../../utils/validate'
import bcrypt from 'bcrypt'


connectDB()

export default async(req, res) => {
    switch(req.method) {
        case "POST":
            await register(req, res)
            break
        case "GET":
            console.log("get")
            break
    }
}

const register = async(req, res) => {
    try {
        const {nome, email, password, cf_password } = req.body
        const errMsg = validar(nome, email, password, cf_password)

        
        if(errMsg) return res.status(400).json({err: errMsg})

        const passwordHash = await bcrypt.hash(password, 12)
        //console.log(passwordHash)

        const newUser = new Users({
            nome, email, password: passwordHash, cf_password
        })

        console.log(newUser)
        await newUser.save()
        res.json({msg: "Usuário registrado!"})

    } catch (err) {
        res.status(500).json({err: err.message});
    }
}



