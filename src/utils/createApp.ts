import { config } from 'dotenv';
import express, { Express } from 'express';
import routes from '../routes';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import store from 'connect-mongo';

config();
require('../strategies/discord');

export function createApp(): Express {
    const app = express();
    //Enable parsing middleware from requests
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //Enable CORS
    app.use(cors({ origin: '*', credentials: true})); //['http://localhost:3000'] , credentials: true}));

    const DB = process.env.MONGODB_URI;

    app.use(session({
        secret: 'ENHsnfiJSFMKn4439291u7NJEfknwioh87',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000 * 60 * 24 * 7,
            secure: false,
        },
        store: store.create({
            mongoUrl: `${DB}`,
        }),
    }));

    //Enable Passport
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => setTimeout(() => next(), 1000));

    app.use('/api', routes);
    return app;
}