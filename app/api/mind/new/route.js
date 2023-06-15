import { connectToDb } from '@utils/database';
import Mind from '@models/mind';
export const POST = async (req) => {
  const { userId, mind, tag } = await req.json();
  try {
    await connectToDb();
    const newMind = new Mind({
      creator: userId,
      mind,
      tag,
    });
    await newMind.save();
    return new Response(JSON.stringify(newMind), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new prompt', { status: 500 });
  }
};
