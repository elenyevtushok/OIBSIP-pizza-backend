import express, { Express } from 'express';
import bodyParser from 'body-parser';
// import mongoose from "mongoose"
import pizzaRoutes from './routes/pizzaRoutes';
var cors = require('cors')

const port = 3000;
// express app
const app: Express = express();
app.use(cors())
app.use(bodyParser.json());
app.use(pizzaRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

//connect to mongoDB
// const dbURI: string = "mongodb+srv://test-user:krpMy3cp02gk3xaV@cluster1.sxotztp.mongodb.net/blog-database";
// mongoose.connect(dbURI)
// 	.then((result) => app.listen(3000))
// 	.then((result) => console.log('connected to DB'))
// 	.catch((err) => console.log(err))
