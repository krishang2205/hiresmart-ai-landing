import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 animate-fade-in">
      <div className="bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
        <nav aria-label="Primary" className="container mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2" aria-label="HireSmart home">
            <span className="h-6 w-6 rounded bg-gradient-primary shadow-glow" aria-hidden />
            <span className="font-display text-lg font-bold tracking-tight bg-gradient-primary bg-clip-text text-transparent">HireSmart</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="story-link text-sm text-muted-foreground hover:text-foreground">Features</a>
            <a href="#how-it-works" className="story-link text-sm text-muted-foreground hover:text-foreground">How it works</a>
            <a href="#testimonials" className="story-link text-sm text-muted-foreground hover:text-foreground">Testimonials</a>
            <a href="#cta" className="story-link text-sm text-muted-foreground hover:text-foreground">Request demo</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="#" aria-label="Sign in to HireSmart" className="flex items-center gap-2"><LogIn className="size-4" /> Sign in</a>
            </Button>
            <Button variant="hero" size="sm" asChild className="hover-scale">
              <a href="#cta" aria-label="Create your HireSmart account" className="flex items-center gap-2"><UserPlus className="size-4" /> Sign up</a>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetTitle>Menu</SheetTitle>
                <div className="mt-6 grid gap-4">
                  <a href="#features" className="text-foreground" aria-label="Go to features">Features</a>
                  <a href="#how-it-works" className="text-foreground" aria-label="Go to how it works">How it works</a>
                  <a href="#testimonials" className="text-foreground" aria-label="Go to testimonials">Testimonials</a>
                  <a href="#cta" className="text-foreground" aria-label="Request demo">Request demo</a>
                  <div className="h-px bg-border my-2" />
                  <Button variant="outline" asChild>
                    <a href="#" aria-label="Sign in to HireSmart" className="flex items-center gap-2"><LogIn className="size-4" /> Sign in</a>
                  </Button>
                  <Button variant="hero" asChild>
                    <a href="#cta" aria-label="Create your HireSmart account" className="flex items-center gap-2"><UserPlus className="size-4" /> Sign up</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
