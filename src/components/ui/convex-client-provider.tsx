"use client";

import { Authenticated, Unauthenticated, AuthLoading, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return
  (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk
        useAuth={useAuth}
        client={convex}>
        <Authenticated>
          {children}
        </Authenticated>

        <Unauthenticated>
          <p>Please log in</p>
        </Unauthenticated>

        <AuthLoading>
          <p>Loading auth...</p>
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>

  )
}