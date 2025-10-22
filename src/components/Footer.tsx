const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
           {new Date().getFullYear()} @ Kesavamoorthy K. Crafted with passion and precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
