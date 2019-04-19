/* eslint-disable no-shadow */
import Course from '../models/Course'

const resolvers = {
	Query: {
		allCourses: (root, { searchTerm }) => {
			if (searchTerm) {
				return Course.find({ $text: { $search: searchTerm } }).sort({
					voteCount: 'desc',
				})
			}
			return Course.find().sort({ voteCount: 'desc' })
		},
		course: (root, { id }) => {
			return Course.findOne({ id })
		},
	},
	Mutation: {
		upvote: (root, { id }) => {
			return Course.findOneAndUpdate(
				{ id },
				{ $inc: { voteCount: 1 } },
				{ returnNewDocument: true }
			)
		},
		downvote: (root, { id }) => {
			return Course.findOneAndUpdate(
				{ id },
				{ $inc: { voteCount: -1 } },
				{ returnNewDocument: true }
			)
		},
		addCourse: (root, { title, author, description, topic, url }) => {
			const course = new Course({
				title,
				author,
				description,
				topic,
				url,
			})
			return course.save()
		},
	},
}

export default resolvers
