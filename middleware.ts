import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/account/login',
  '/account/sign-up',
  '/monitoring',
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return;
    auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
