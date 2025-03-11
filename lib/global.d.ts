import mongoose from 'mongoose';

declare global {
  namespace globalThis {
    let mongoose: { // Changed from var to let
      conn: mongoose.Mongoose | null;
      promise: Promise<mongoose.Mongoose> | null;
    };
  }
}