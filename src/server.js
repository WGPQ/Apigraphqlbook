//const { db } = require("./cnnnpm install --save-dev ");
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');

const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');


const { db } = require("./db/database")
const PORT = 3001;
const endPoint = "/book_api";
const server = express();
server.set('PORT', process.env.PORT || 8000);
const typeDefs = importSchema('./schema.graphql')
//const resolvers = {}
const { resolvers } = require('./resolvers');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//  "dev": "nodemon ./src/server.js"
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

server.use(endPoint, express.json(), graphqlExpress({
    schema
}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: endPoint,
}));
server.use('/', (req, res) => res.send("Welcome ElishERP User"));
server.listen(PORT, () => {
    console.log("GraphQL API listen int http://localhost: " + PORT + endPoint);
    console.log("GraphiQL listen in http://localhost:" + PORT + "/graphiql");
});
