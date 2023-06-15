import { connectToDb } from '@utils/database';
export const POST = async (req, res) => {
  const { userId, mind, tag } = await req.json;
  try {
    await connectToDb();
  } catch (error) {}
};
