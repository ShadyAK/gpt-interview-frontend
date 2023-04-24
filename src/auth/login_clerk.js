import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
  } from "@clerk/clerk-react";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function AuthClerk() {
    return (
      // Wrap your entire app with ClerkProvider
      // Don't forget to pass the frontendApi prop
      <ClerkProvider publishableKey={clerkPubKey}>
        <SignedIn>
          <Hello />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider>
    );
  }

function Hello() {
const { user } = useUser();

return (
    <div className="App-header">
    {/* Mount the UserButton component */}
    <UserButton />
    {user ? <h1>Hello, {user.firstName}!</h1> : null}
    </div>
);
}
export default AuthClerk;