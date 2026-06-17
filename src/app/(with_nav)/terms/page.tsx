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
            Welcome to Teen Patti Tracker! These Terms and Conditions (&quot;Terms&quot;)
            govern your use of the Teen Patti Tracker mobile application (&quot;App&quot;) provided by
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
              Teen Patti Tracker provides users with a utility tool to track scores, rounds, 
              and dealer rotations for physical, real-world Teen Patti card games. You are granted a limited,
              non-exclusive, non-transferable, and revocable license to use the
              App for your personal, non-commercial use in accordance with Apple App Store guidelines.
            </p>
            <p className="mt-2 text-red-500 font-medium">
              You must be at least 17 years of age to use this App.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground text-red-500">
              2. Strictly a Utility - No Real Money Gambling
            </h2>
            <p>
              <strong>IMPORTANT:</strong> Teen Patti Tracker is strictly a score-keeping utility application. 
              The App does <strong>NOT</strong> offer, promote, facilitate, or simulate real-money gambling, 
              betting, or wagering of any kind. The App does not allow users to deposit, win, or withdraw 
              real money or anything of monetary value. It is solely designed to assist players in keeping 
              track of their physical game scores offline.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              3. User Accounts
            </h2>
            <p>
              No manual account creation is required to use the App. We utilize anonymous authentication running in the background to securely sync your game sessions. You are responsible for safeguarding your device to prevent unauthorized access to your game data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              4. User Content
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
              5. Intellectual Property
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
              and other laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              6. Termination
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
              7. Limitation of Liability
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
              8. Changes
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
              9. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2 text-foreground font-medium">
              <Link
                href="https://teenpattitracker.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Everest Technologies
              </Link>{' '}
              <br />
              Email: info@everesttechnologies.com.np
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}

export default TermsAndConditionPage
