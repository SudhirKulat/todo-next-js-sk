import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Todo from '@/models/Todo';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export async function GET() {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
const {id: userId} = session.user;

  try {
    const todos = await Todo.find({userId}).sort({ createdAt: -1 });
    return NextResponse.json(todos);
  } catch (err) {
    return NextResponse.json({ message: 'Error fetching todos' + err }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { title, description, status } = await req.json();

  if (!title || !description) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }
  try {
    const newTodo = await Todo.create({
      title,
      description,
      status: status || 'pending',
      userId: session.user.id,
    });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Failed to create todo' + err }, { status: 500 });
  }
}
