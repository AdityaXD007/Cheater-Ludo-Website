import Link from 'next/link'
import Container from '@/components/global/container'
import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <Container className="py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            <Link
              href="https://everesttechnologies.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Everest Technologies
            </Link>{' '}
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, and safeguard your information when you use our mobile
            application, <strong>CV Maker</strong>, available on the Apple App
            Store and Google Play Store.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p>
              To provide you with our CV creation services, we may collect the
              following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Information you
                voluntarily provide to generate your CV, such as your name,
                contact details (email, phone number), address, education
                history, work experience, and skills.
              </li>
              <li>
                <strong>Account Information:</strong> If you choose to create an
                account to save your data, we collect your email address and
                password. Alternatively, you may log in using Google or Apple
                authentication services, in which case we collect your basic
                profile information (name and email) authorized by those
                providers.
              </li>
              <li>
                <strong>Usage Data:</strong> Anonymous data about how you
                interact with our app, such as crash logs and performance
                metrics, to help us improve the user experience.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              2. How We Use Your Information
            </h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                To create and format your CV based on the templates you choose.
              </li>
              <li>
                To facilitate account creation and secure login processes.
              </li>
              <li>
                To save your progress and allow you to edit your CVs across
                devices.
              </li>
              <li>To improve our app features, functionality, and designs.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              3. Data Storage and Security
            </h2>
            <p>
              Your personal data and generated CVs are stored securely on our
              servers. We implement appropriate technical and organizational
              measures to protect your data against unauthorized access,
              alteration, disclosure, or destruction. However, please note that
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              4. Third-Party Services
            </h2>
            <p>
              We may use third-party services for authentication and app
              performance monitoring:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Authentication:</strong> Google Sign-In and Sign in with
                Apple. These services adhere to their own privacy policies.
              </li>
              <li>
                <strong>App Stores:</strong> Apple App Store and Google Play
                Store may process payments or subscriptions if applicable,
                subject to their respective terms.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information stored in our app. You can manage your profile within
              the app settings or contact us to request data deletion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              6. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mt-2 text-foreground font-medium">
              <Link
                href="https://everesttechnologies.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
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

export default PrivacyPolicyPage
