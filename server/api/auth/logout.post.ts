export default defineEventHandler(async event => {
  const session = await getUserSession(event);

  if (session.user) {
    await clearUserSession(event);
    await sendRedirect(event, '/login', 302);
  }

  throw createError({
    statusCode: 401,
    statusMessage: 'No active session found. Unable to log out.',
  });
});
