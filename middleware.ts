import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/monitoring',
  '/account/login',
  '/account/create',
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
