export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn } = useUserSession();

  if (!loggedIn.value && to.meta.layout === 'authenticated') {
    return navigateTo('/login');
  }
});
