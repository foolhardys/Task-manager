import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Must provide name'],
            trim: true,
            maxlength: [40, 'name cannot be more than 40 words']
        },
        completed: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Tasks', TaskSchema)