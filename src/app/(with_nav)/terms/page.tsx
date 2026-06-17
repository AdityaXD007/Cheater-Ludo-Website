import Container from '@/components/global/container'
import Link from 'next/link'

const TermsAndConditionPage = () => {
  return (
    <Container className="py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground text-sm">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Welcome to CV Maker! These Terms and Conditions (&quot;Terms&quot;)
            govern your use of the CV Maker mobile application (&quot;App&quot;)
            <Link
              href="https://everesttechnologies.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Everest Technologies
            </Link>{' '}
            (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
          </p>
          <p>
            By accessing or using the App, you agree to be bound by these Terms.
            If you disagree with any part of the terms, then you may not access
            the App.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              1. Use of the App
            </h2>
            <p>
              CV Maker provides users with tools and templates to create
              professional Curriculum Vitae (CVs). You are granted a limited,
              non-exclusive, non-transferable, and revocable license to use the
              App for your personal, non-commercial use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              2. User Accounts
            </h2>
            <p>
              To access certain features, such as saving your CV data, you may
              be required to create an account. You are responsible for
              safeguarding the password that you use to access the App and for
              any activities or actions under your password.
            </p>
            <p>
              You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of
              security or unauthorized use of your account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              3. User Content
            </h2>
            <p>
              Our App allows you to post, link, store, share and otherwise make
              available certain information, text, graphics, or other material
              (&quot;Content&quot;). You are responsible for the Content that
              you post to the App, including its legality, reliability, and
              appropriateness.
            </p>
            <p>
              By posting Content to the App, you grant us the right and license
              to use, modify, perform, display, reproduce, and distribute such
              Content on and through the App solely for the purpose of providing
              the service to you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              4. Intellectual Property
            </h2>
            <p>
              The App and its original content (excluding Content provided by
              users), features, and functionality are and will remain the
              exclusive property of{' '}
              <Link
                href="https://everesttechnologies.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Everest Technologies
              </Link>{' '}
              and its licensors. The App is protected by copyright, trademark,
              and other laws. Our CV templates are for your personal use only
              and may not be resold or redistributed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              5. Termination
            </h2>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms. Upon termination, your
              right to use the App will immediately cease.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              6. Limitation of Liability
            </h2>
            <p>
              In no event shall{' '}
              <Link
                href="https://everesttechnologies.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Everest Technologies
              </Link>
              , nor its directors, employees, partners, agents, suppliers, or
              affiliates, be liable for any indirect, incidental, special,
              consequential or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses,
              resulting from your access to or use of or inability to access or
              use the App.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              7. Changes
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. We will provide notice of any significant
              changes. By continuing to access or use our App after those
              revisions become effective, you agree to be bound by the revised
              terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2 text-foreground font-medium">
              <Link
                href="https://everesttechnologies.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Everest Technologies
              </Link>{' '}
              <br />
              Email: tech.everest.2021@gmail.com
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}

export default TermsAndConditionPage
