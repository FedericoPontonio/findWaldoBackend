const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const express = require('express')
const router = express.Router()

router.get('/', async (req, res) =>{
    const allEntries = await prisma.records.findMany({
        orderBy: {
            timeRecord: 'asc'
        }
    })
    res.json({message:allEntries})
})

router.post('/', async (req, res) => {
    await prisma.records.create({
        data:{
            username: req.body.username,
            timeRecord: req.body.timeRecord,
            gameSelected: req.body.gameSelected
        }
    })
    res.json({message:"success"})
})

module.exports = router;