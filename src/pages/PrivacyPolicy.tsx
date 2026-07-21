import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/liberty-logo.png";

const LAST_UPDATED = "21 July 2026";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="border-b border-border/30">
        <div className="container-content">
          <div className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-20">
            <Link to="/" className="flex items-center" aria-label="Liberty International — home">
              <img src={logo} alt="Liberty International" className="h-10 md:h-12" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-label text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
          </div>
        </div>
      </header>

      <main className="container-content px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="text-label text-muted-foreground mb-4 block">Legal</span>
          <h1 className="heading-section text-foreground mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-10">
            <section>
              <p className="text-body text-muted-foreground">
                Liberty International ("we", "us", "our") is committed to protecting the privacy of
                everyone who interacts with our website and services. This policy explains what
                personal information we collect, how we use it, and the choices available to you. We
                handle personal data in accordance with the Singapore Personal Data Protection Act
                (PDPA) and the Australian Privacy Act 1988, as applicable.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Information we collect</h2>
              <p className="text-body text-muted-foreground">
                When you submit our contact form, we collect the information you choose to provide —
                your name, email address, company name (optional) and the content of your message. We
                do not require any other personal information to respond to your enquiry.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">How we use your information</h2>
              <p className="text-body text-muted-foreground">
                We use the information you provide solely to respond to your enquiry, to communicate
                with you about our advisory services, and to maintain a record of our correspondence.
                We do not sell your personal information, and we do not use it for automated
                decision-making or profiling.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Disclosure and service providers</h2>
              <p className="text-body text-muted-foreground">
                Contact-form submissions are delivered to us by email through a third-party form
                service (Web3Forms), which processes the submission solely to transmit it to us. We
                may also share information with professional advisers or authorities where required by
                law. We do not otherwise disclose your personal information to third parties without
                your consent.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Data retention</h2>
              <p className="text-body text-muted-foreground">
                We retain enquiry information only for as long as necessary to respond to you and to
                maintain reasonable business records, after which it is securely deleted or anonymised.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Data security</h2>
              <p className="text-body text-muted-foreground">
                We take reasonable technical and organisational measures to protect personal
                information against loss, misuse and unauthorised access. However, no method of
                transmission over the internet is completely secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Your rights</h2>
              <p className="text-body text-muted-foreground">
                Subject to applicable law, you have the right to request access to, correction of, or
                deletion of the personal information we hold about you, and to withdraw any consent you
                have provided. To exercise these rights, please contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Cookies</h2>
              <p className="text-body text-muted-foreground">
                Our website does not use non-essential tracking or advertising cookies. Any cookies set
                are strictly necessary for the site to function.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Contact us</h2>
              <p className="text-body text-muted-foreground">
                If you have any questions about this policy or wish to exercise your privacy rights,
                please contact us at{" "}
                <a
                  href="mailto:mel@libertyinternational.com.au"
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  mel@libertyinternational.com.au
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Changes to this policy</h2>
              <p className="text-body text-muted-foreground">
                We may update this policy from time to time. Any changes will be posted on this page
                with a revised "last updated" date.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border/30">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-label text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
