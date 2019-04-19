const courseData = [
    {
        id: '1',
        title: 'Title 1',
        author: 'Author 1',
        description: 'Description 1',
        topic: 'Topic 1',
        url: 'URL 1',
        voteCount: 0
    },
    {
        id: '2',
        title: 'Title 2',
        author: 'Author 2',
        description: 'Description 2',
        topic: 'Topic 2',
        url: 'URL 2',
        voteCount: 0
    },
    {
        id: '3',
        title: 'Title 3',
        author: 'Author 3',
        description: 'Description 3',
        topic: 'Topic 3',
        url: 'URL 3',
        voteCount: 0
    },
]

export const resolvers = {
    Query: {
        allCourses: (root, { searchTerm }) => {
            return courseData
        },
        course: (root, {id}) => {
            return courseData.findOne({id})
        }
    }
}