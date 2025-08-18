export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-medical"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-medical"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-medical"
            >
              Contact
            </a>
          </div>
          
          <p className="text-center md:text-right text-muted-foreground text-sm">
            © 2024 GlaucoScan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};