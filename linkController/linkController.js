require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('../models/Info')
const bcrypt = require('bcrypt')

const register = async (req, res) => {

    const { email, senha, confirmSenha } = req.body

    if(!email) return res.status(422).json({ msg: 'O email é obrigatório' })
    if(!senha) return res.status(422).json({ msg: 'A senha é obrigatória' })
    if(!confirmSenha) return res.status(422).json({ msg: 'Confirme sua senha por favor' })

    if(senha != confirmSenha) return res.status(422).json({ msg: 'A senhas são diferentes!' })

    const usuarioExistente = await User.findOne({ email: email })

    if(usuarioExistente) return res.status(200).json({ msg: 'O email digitado já está em uso! Tente outro' })

    const salt = await bcrypt.genSalt(14)
    const senhaCriptografada = await bcrypt.hash(senha, salt)

    const user = new User({ email, senha: senhaCriptografada, confirmSenha })

    try{
        user.save()
        res.status(200).json({ msg: 'Usuário criado com sucesso!' })
    }catch(error){
        console.log()
        res.status(500).json({ msgS: '[ERROR - 500]: Houve um erro no veridor! Tente novamente mais tarde' })
    }

}

module.exports = { register }