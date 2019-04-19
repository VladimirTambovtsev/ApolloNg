import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

import typeDefs from './src/schema'
import resolvers from './src/resolvers'

mongoose
	.connect('mongodb://localhost:27017/apollong', {
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then('MongoDB Connected')
	.catch('Error Connecting to MongoDB')

// Apollo server
const server = new ApolloServer({
	typeDefs,
	resolvers,
})

/* eslint-disable no-console */
const PORT = process.env.port || 8080
server.listen(PORT, console.log(`Server is running at ${PORT}`))
