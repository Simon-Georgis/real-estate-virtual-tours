import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logo from "../assets/digirise-logo.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-cream px-4">
      <div className="max-w-md text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">Error 404</p>
        <h1 className="mt-4 font-serif text-5xl italic text-brand-black">Page not found</h1>
        <p className="mt-4 text-sm text-brand-black/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center border-b border-brand-black pb-1 text-xs uppercase tracking-[0.2em]"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-cream px-4">
      <div className="max-w-md text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">Something broke</p>
        <h1 className="mt-4 font-serif text-4xl italic text-brand-black">
          This page didn't load
        </h1>
        <p className="mt-4 text-sm text-brand-black/60">
          You can try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.2em]">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border-b border-brand-black pb-1"
          >
            Try again
          </button>
          <a href="/" className="border-b border-brand-black/30 pb-1">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DigiRise — Real Estate Media, Melbourne" },
      {
        name: "description",
        content:
          "DigiRise is Simon's real estate media studio — photography, drone, 360° Matterport tours and cinematic video for premium listings across Australia.",
      },
      { name: "author", content: "DigiRise" },
      { property: "og:site_name", content: "DigiRise" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "DigiRise — Real Estate Media" },
      {
        property: "og:description",
        content:
          "Premium photography, drone, and 360° Matterport tours for high-end property listings.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logo.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-brand-cream text-brand-black">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
