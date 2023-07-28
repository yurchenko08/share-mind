import { connectToDb } from '@utils/database';
import Mind from '@models/mind';
export const GET = async (req) => {
  try {
    await connectToDb();
    const minds = await Mind.find({}).populate('creator');
    return new Response(JSON.stringify(minds), { status: 200 });
  } catch (error) {
    new Response('Failed to fetch all minds', { status: 500 });
  }
};
