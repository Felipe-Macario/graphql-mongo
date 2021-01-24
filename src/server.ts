import 'reflect-metadata';

const dotenv = require('dotenv')
dotenv.config()

import './utils/connection';

import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { Container } from 'typedi';

import CategoryResolver from './graphql/resolvers/CategoryResolver';
import VideoResolver from './graphql/resolvers/VideoResolver';

async function bootstrap(){
    const schema = await buildSchema({
        resolvers: [CategoryResolver, VideoResolver],
        container: Container
    });

    const server = new ApolloServer({schema});

    server.listen({ port:4100 }, () => console.log("Running..."));
}

bootstrap();