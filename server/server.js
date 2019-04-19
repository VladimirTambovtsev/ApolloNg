import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './src/schema'
import { resolvers } from './resolvers'


// Apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const PORT = process.env.port || 8080
server.listen(PORT, console.log(`Server is running at ${PORT}`))