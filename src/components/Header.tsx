import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav aria-label="Primary" className="container mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground" aria-label="HireSmart home">
          HireSmart
        </a>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href="#" aria-label="Sign in to HireSmart">Sign in</a>
          </Button>
          <Button variant="hero" size="sm" asChild className="hover-scale">
            <a href="#cta" aria-label="Create your HireSmart account">Sign up</a>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
