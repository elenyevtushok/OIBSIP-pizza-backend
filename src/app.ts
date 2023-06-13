import express, { Express } from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose"
import pizzaRoutes from './routes/pizzaRoutes';
import ingredientRoutes from './routes/ingredientRoutes';
import orderRoutes from './routes/orderRoutes';
import addressRoutes from './routes/addressRoutes';
var cookieParser = require('cookie-parser')
var cors = require('cors')

const port = 3000;
// express app
const app: Express = express();
app.use(
	cors({
		origin: 'http://localhost:5173', // Replace with your client's origin
		credentials: true, // Allow requests with credentials
	})
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use(pizzaRoutes);
app.use(ingredientRoutes);
app.use(orderRoutes);
app.use(addressRoutes);


// app.listen(port, () => {
// 	console.log(`Example app listening on port ${port}`)
// })

// connect to mongoDB
const dbURI: string = "mongodb+srv://test-user:krpMy3cp02gk3xaV@cluster1.sxotztp.mongodb.net/Perfect-pizza";
mongoose.connect(dbURI)
	.then((result) => app.listen(3000))
	.then((result) => console.log('connected to DB'))
	.catch((err) => console.log(err))
