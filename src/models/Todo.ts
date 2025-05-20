import { Schema, model, models, Types } from 'mongoose';

export interface ITodo {
  title: string;
  description: string;
  status: 'pending' | 'completed';
  userId: Types.ObjectId;
}

const TodoSchema = new Schema<ITodo>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending',
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

const Todo = models.Todo || model<ITodo>('Todo', TodoSchema);
export default Todo;
