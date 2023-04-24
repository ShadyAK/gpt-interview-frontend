import "./App.css";
import Landing from "./components/Landing";
import Login from "./auth/login";
import AuthClerk from "./auth/login_clerk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";


// function App() {
//   return (
//     // Wrap your entire app with ClerkProvider
//     // Don't forget to pass the frontendApi prop
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <SignedIn>
//         <Hello />
//       </SignedIn>
//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </ClerkProvider>
//   );
// }

function App() {
  return (

   <BrowserRouter>
      <Routes>
        <Route path="/code" element={<Landing />} />
        <Route path="/login" element={<AuthClerk />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
