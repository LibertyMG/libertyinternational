import { Link } from "react-router-dom";
import logo from "@/assets/liberty-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 bg-secondary/30 border-t border-border/30">
      <div className="container-content">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Liberty International" className="h-10" />

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm text-muted-foreground">
              Singapore • Australia • UAE
            </p>
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Liberty International. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
