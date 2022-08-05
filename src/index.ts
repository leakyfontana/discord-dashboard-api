import { config } from 'dotenv';
config();

import express from 'express';
import { createApp } from './utils/createApp';
import './database'

const app= express();
const PORT = process.env.PORT || 5000;


async function main() {
    try {
        const app = createApp();
        app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
        console.log(`Running in ${process.env.ENVIRONMENT} mode.`)
    } catch (err) {
        console.log(err);
    }
}

main();