const typeDefs = `
  type Course {
    id: ID
    title: String
    author: String
    description: String
    topic: String
    url: String
    voteCount: Int
  }
  type Query {
    allCourses(searchTerm: String): [Course]
    course(id: ID!): Course
  }
  type Mutation {
    addCourse(
      id: ID
      title: String!
      author: String!
      description: String
      topic: String!
      url: String
    ): Course
    upvote(id: ID!): Course
    downvote(id: ID!): Course
  }
`
export default typeDefs
