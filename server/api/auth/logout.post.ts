export default defineEventHandler(async event => {
  const session = await getUserSession(event);

  if (session.user) {
    await clearUserSession(event);
  }
});
