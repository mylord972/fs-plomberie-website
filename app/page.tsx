"use client";

import { useState } from "react";
import { Phone, Droplets, Wrench, Clock, Shield, Award, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      icon: Wrench,
      title: "Dépannage rapide",
      description: "Intervention efficace du lundi au vendredi pour tous vos problèmes de plomberie urgents.",
    },
    {
      icon: Droplets,
      title: "Installation sanitaire",
      description: "Installation complète de salles de bain, cuisines et équipements sanitaires.",
    },
    {
      icon: Shield,
      title: "Rénovation",
      description: "Rénovation complète de vos installations avec garantie à vie sur nos travaux.",
    },
  ]

  const stats = [
    { number: "2019", label: "Année de création" },
    { number: "Lun - Ven", label: "Disponibilité" },
    { number: "100%", label: "Satisfaction client" },
  ]

  // ⬇️ Utilise tes images actuelles (tu peux remplacer par tes images locales si besoin)
  // Exemple images locales si tu veux: "/images/avant-apres/avant1.jpg", "/images/avant-apres/apres1.jpg", etc.
  const beforeAfterGallery = [
    
  { before: "/images/avant-apres/avant1.jpg", after: "/images/avant-apres/apres1.jpg", title: "Création complète d’une douche à l’italienne" },
  { before: "/images/avant-apres/avant2.jpg", after: "/images/avant-apres/apres2.jpg", title: "Transformation baignoire en douche design" },
  { before: "/images/avant-apres/avant3.jpg", after: "/images/avant-apres/apres3.jpg", title: "Rénovation moderne d’une salle de bain complète" },
  { before: "/images/avant-apres/avant4.jpg", after: "/images/avant-apres/apres4.jpg", title: "Rénovation du sol de douche en galets" },
  { before: "/images/avant-apres/avant5.jpg", after: "/images/avant-apres/apres5.jpg", title: "Transformation baignoire en douche à l’italienne" },
  { before: "/images/avant-apres/avant6.jpg", after: "/images/avant-apres/apres6.jpg", title: "Rénovation complète avec douche carrelée" },
  { before: "/images/avant-apres/avant7.jpg", after: "/images/avant-apres/apres7.jpg", title: "Modernisation d’une douche ouverte" },
  { before: "/images/avant-apres/avant8.jpg", after: "/images/avant-apres/apres8.jpg", title: "Installation d’une douche moderne avec paroi vitrée" },
  { before: "/images/avant-apres/avant9.jpg", after: "/images/avant-apres/apres9.jpg", title: "Rénovation totale d’une salle de bain" },
  { before: "/images/avant-apres/avant10.jpg", after: "/images/avant-apres/apres10.jpg", title: "Salle de bain modernisée avec meuble vasque double tiroir" },
  { before: "/images/avant-apres/avant11.jpg", after: "/images/avant-apres/apres11.jpg", title: "Plan de travail de cuisine rénové effet marbre" },
  { before: "/images/avant-apres/avant12.jpg", after: "/images/avant-apres/apres12.jpg", title: "Rénovation complète avec douche à l’italienne" },
];

  

  // ⬇️ Nouveauté : état pour afficher 3 items puis tout
  const [showAll, setShowAll] = useState(false);
const visibleProjects = showAll ? beforeAfterGallery : beforeAfterGallery.slice(0, 3);


  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cch1ochLVHtXLQQtw7t3lTp05Y4qNE.png"
                alt="FS Plomberie"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">FS Plomberie</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#services"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="#realisations"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Réalisations
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                À propos
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Phone className="h-4 w-4 mr-2" />
                0696 55 69 55
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004E75] via-[#006894] to-[#0090C1]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
              <span className="text-sm font-medium text-accent-foreground">Rapidité • Fiabilité • Tranquillité</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
              Votre plombier de confiance en Martinique
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Installations professionnelles et rénovations complètes. Garantie à vie sur toutes nos installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8">
                <Phone className="h-5 w-5 mr-2" />
                Appeler maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 text-base h-12 px-8"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}


      {/* Services Section */}
      <section id="realisations" className="py-20 lg:py-32 bg-muted/30">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="max-w-2xl mb-16 text-center mx-auto">
      <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Nos réalisations</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Découvrez la qualité de notre travail à travers nos transformations avant/après.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {visibleProjects.map((project, index) => (
        <Card
          key={index}
          className="group border-border overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <CardContent className="p-0">
            <div className="grid grid-cols-2 gap-0">
              {/* AVANT */}
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Avant
                </div>
                <Image
                  src={project.before}
                  alt={`Avant - ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 ease-out will-change-transform group-hover:scale-110"
                />
              </div>

              {/* APRÈS */}
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute top-2 right-2 z-10 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Après
                </div>
                <Image
                  src={project.after}
                  alt={`Après - ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 ease-out will-change-transform group-hover:scale-110"
                />
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-foreground text-center">{project.title}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="mt-12 text-center">
      {!showAll ? (
        <Button
          size="lg"
          variant="outline"
          className="text-base h-12 px-8 bg-transparent"
          onClick={() => setShowAll(true)}
        >
          Voir toutes nos réalisations
        </Button>
      ) : (
        <Button
          size="lg"
          variant="outline"
          className="text-base h-12 px-8 bg-transparent"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setShowAll(false);
          }}
        >
          Réduire l’affichage
        </Button>
      )}
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                FS Plomberie, votre partenaire depuis 2019
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Fondée en 2019, FS Plomberie s'est rapidement imposée comme une référence en Martinique pour tous les
                travaux de plomberie, sanitaire et chauffage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Notre devise "Rapidité, fiabilité, tranquillité" guide chacune de nos interventions. Nous mettons un
                point d'honneur à offrir un service professionnel et des solutions durables.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Devis payant</h4>
                    <p className="text-sm text-muted-foreground">Devis détaillé et transparent pour tous vos projets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Frais de déplacement</h4>
                    <p className="text-sm text-muted-foreground">Tarification claire selon votre localisation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Garantie à vie</h4>
                    <p className="text-sm text-muted-foreground">Sur toutes nos installations neuves</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cch1ochLVHtXLQQtw7t3lTp05Y4qNE.png"
                  alt="FS Plomberie - Votre expert plomberie en Martinique"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction garantie</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Besoin d'un plombier ?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Contactez-nous dès maintenant pour une intervention rapide ou un devis personnalisé.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Téléphone</h3>
                  <a
                    href="tel:0696556955"
                    className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    0696 55 69 55
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Du lundi au vendredi, 7h–18h</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/596696556955"
                    className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    Message rapide
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Réponse dès ouverture</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base h-12 px-8">
                <Phone className="h-5 w-5 mr-2" />
                Appeler maintenant
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-8 bg-transparent">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cch1ochLVHtXLQQtw7t3lTp05Y4qNE.png"
                  alt="FS Plomberie"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-lg font-bold">FS Plomberie</span>
              </div>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                Rapidité, fiabilité, tranquillité. Votre plombier de confiance en Martinique depuis 2019.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Dépannage rapide</li>
                <li>Installation sanitaire</li>
                <li>Rénovation</li>
                <li>Chauffe-eau</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Tél: 0696 55 69 55</li>
                <li>Disponibilité : Lun–Ven, 7h–18h</li>
                <li>Martinique</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/60">
            <p>© 2025 FS Plomberie. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/596696556955"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="tel:0696556955"
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Appeler"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}
