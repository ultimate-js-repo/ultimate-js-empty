import React from "react";
import type { DocumentHead } from "@ultimate-js/core";

export const head: DocumentHead = {
  title: "Ultimate.js Empty",
  lang: "en",
  styles: [`
    *, *::before, *::after { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      background: #0b1020;
      color: #f8fafc;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    a { color: inherit; }

    .shell {
      width: min(100% - 48px, 960px);
      min-height: 100vh;
      margin: 0 auto;
      display: grid;
      place-items: center;
    }

    .starter {
      width: 100%;
      padding: 64px 0;
    }

    .starter h1 {
      margin: 0 0 16px;
      font-size: 48px;
      line-height: 1.05;
      letter-spacing: 0;
    }

    .starter p {
      max-width: 560px;
      margin: 0;
      color: #cbd5e1;
      font-size: 18px;
      line-height: 1.7;
    }

    @media (max-width: 640px) {
      .shell { width: min(100% - 32px, 960px); }
      .starter h1 { font-size: 36px; }
    }
  `],
};

export default function RootLayout(
  { children }: { children: React.ReactNode },
): React.ReactElement {
  return (
    <main className="shell">
      {children}
    </main>
  );
}
