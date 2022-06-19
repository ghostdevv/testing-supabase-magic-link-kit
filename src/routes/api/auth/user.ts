import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ locals }) => {
    const { user, accessToken } = locals;

    return {
        status: 200,
        body: {
            user: user as Record<string, any>,
            accessToken,
        },
    };
};
