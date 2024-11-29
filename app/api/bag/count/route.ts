import { PrismaClient } from '../../../../prisma/generated/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return new Response(
        JSON.stringify({ error: 'User ID is required' }),
        { status: 400 }
      );
    }

    const count = await prisma.bag.count({
      where: {
        user_id: userId,
      },
    });

    return new Response(JSON.stringify({ count }), { status: 200 });
  } catch (error) {
    console.error('Error fetching bag count:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch bag count' }),
      { status: 500 }
    );
  }
}
