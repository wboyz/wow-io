export default defineEventHandler(async event => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  console.log('Login attempt', body);

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
});
