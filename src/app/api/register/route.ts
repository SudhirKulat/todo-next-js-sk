import { NextResponse } from 'next/server';
import {connectDB} from '../../../lib/mongodb';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const { email, password, firstName, lastName } = await request.json();
  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ email, password: hashedPassword, firstName, lastName });
  await newUser.save();

  return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
}
