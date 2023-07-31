import { connectToDb } from '@utils/database';
import Mind from '@models/mind';

//GET
export const GET = async (req, { params }) => {
  try {
    await connectToDb();
    const mind = await Mind.findById(params.id).populate('creator');
    if (!mind) return new Response('Mind not found', { status: 404 });
    return new Response(JSON.stringify(mind), { status: 200 });
  } catch (error) {
    new Response('Failed to fetch mind', { status: 500 });
  }
};

//PATCH
export const PATCH = async (req, { params }) => {
  const { mind, tag } = await req.json();
  try {
    await connectToDb();
    const existingMind = await Mind.findById(params.id);
    if (!existingMind) {
      return new Response('Prompt not found', { status: 404 });
    }
    existingMind.mind = mind;
    existingMind.tag = tag;
    await existingMind.save();
    return new Response(JSON.stringify(existingMind), { status: 200 });
  } catch (error) {
    return new Response('Failed to update mind', { status: 500 });
  }
};

//DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDb();
    await Mind.findByIdAndRemove(params.id);
    return new Response('Mind deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('failed to delete', { status: 500 });
  }
};
