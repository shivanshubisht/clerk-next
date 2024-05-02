import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/account/create(.*)',
  '/account/login(.*)',
  '/monitoring',
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return;
    auth().protect();
}, {
  debug: true,
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
