// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/db/mongoose';
import User from '@/lib/models/user';
import { z } from 'zod';

const signupSchema = z.object({
  username: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const body = await request.json();
    const validatedBody = signupSchema.parse(body);

    const { username, email, password } = validatedBody;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: 'Invalid data', details: error.errors }, { status: 400 });
    }
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}