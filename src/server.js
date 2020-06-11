//const { db } = require("./cnnnpm install --save-dev ");
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');

const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');


const { db } = require("./db/database")
const port = 3001;
const endPoint = "/book_api";
const server = express();
express.set('port', process.env.PORT || port);
const typeDefs = importSchema('./schema.graphql')
//const resolvers = {}
const { resolvers } = require('./resolvers');
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

server.listen(PORT, () => {
    console.log("GraphQL API listen int http://localhost: " + port + endPoint);
    console.log("GraphiQL listen in http://localhost:" + port + "/graphiql");
});
