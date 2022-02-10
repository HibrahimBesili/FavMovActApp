import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import "reflect-metadata";
import {createConnection} from "typeorm";
import userRouter from './route/user';
import postRouter from './route/post';
import commentRouter from './route/comment'
import * as passport from 'passport';

const app: Application = express();

createConnection().then(async connection => {

    app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(passport.initialize());

    app.use('/users', userRouter);
    app.use('/posts', postRouter);
    app.use('/comments', commentRouter);

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
        console.log(`🔥🔥 Server is listening on port ${PORT} 🔥🔥🔥`);
      });

}).catch(error => console.log(error));
