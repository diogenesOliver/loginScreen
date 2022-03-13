require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('../models/Info')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

    const user = new User({ email, senha: senhaCriptografada, confirmSenha: senhaCriptografada })

    try{
        user.save()
        res.status(200).json({ msg: 'Usuário criado com sucesso!' })
    }catch(error){
        console.log()
        res.status(500).json({ msgS: '[ERROR - 500]: Houve um erro no veridor! Tente novamente mais tarde' })
    }

}

const loginUser = async (req, res) => { 

    const { email, senha } = req.body

    const user = await User.findOne({ email: email })

    if(!user) return res.status(404).json({ msg: 'Usuário não encontrado!' })

    const verificSenha = await bcrypt.compare(senha, user.senha)

    if(verificSenha == false){
        res.status(422).json({ msg: 'Senha inválida' })
    }else{
        res.status(200).json({ msg: 'Bem-vindo ao portal do usuário!' })
    }

 }

module.exports = { register, loginUser }