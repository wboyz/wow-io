export default defineEventHandler(async event => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  if (
    config.adminUser === body.email &&
    config.adminPassword === body.password
  ) {
    await setUserSession(event, {
      // User data
      user: {
        login: config.adminUser,
      },
      // Private data accessible only on server/ routes
      secure: {
        apiToken: config.adminPassword,
      },
      // Any extra fields for the session data
      loggedInAt: new Date(),
    });

    await sendRedirect(event, '/', 302);
  }

  throw createError({
    statusCode: 401,
    statusMessage: 'Login failed. Please check your credentials and try again.',
  });
});
