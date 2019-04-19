import mongoose from 'mongoose'

const { Schema } = mongoose

const courseSchema = new Schema({
	id: String,
	title: String,
	author: String,
	description: String,
	topic: String,
	url: String,
	voteCount: { type: Number, default: 0 },
})

export default mongoose.model('Course', courseSchema)
