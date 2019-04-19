import mongoose from 'mongoose'
import uuid from 'uuid'

const { Schema } = mongoose

const courseSchema = new Schema({
	id: { type: String, default: uuid.v1 },
	title: String,
	author: String,
	description: String,
	topic: String,
	url: String,
	voteCount: { type: Number, default: 0 },
})

export default mongoose.model('Course', courseSchema)
