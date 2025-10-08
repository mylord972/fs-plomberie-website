import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "FS Plomberie - Plombier professionnel en Martinique | Service 24/7",
  description:
    "Plombier professionnel en Martinique. Dépannage d'urgence 24h/24, installations, rénovations. Rapidité, fiabilité, tranquillité. Garantie à vie. ☎️ 0696 55 69 55",
  keywords:
    "plombier martinique, plomberie urgence, dépannage plomberie, installation sanitaire, rénovation salle de bain, chauffe-eau martinique",
  openGraph: {
    title: "FS Plomberie - Votre plombier de confiance en Martinique",
    description: "Service d'urgence 24/7, installations professionnelles, garantie à vie",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
