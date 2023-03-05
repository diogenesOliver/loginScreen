import { app } from "./main";
import { dataBaseCLientInstance } from './infra/mongoDBClientIndex'

require('dotenv').config()

const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
    await dataBaseCLientInstance.connect()
    console.log(`Server running on port: ${PORT}`)
})