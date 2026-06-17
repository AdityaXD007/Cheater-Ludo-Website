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
            application, <strong>Teen Patti Tracker</strong>, available on the Apple App
            Store and Google Play Store.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p>
              To provide you with our game tracking services, we may collect the
              following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Information you
                voluntarily provide to manage your profile and games, such as custom player names. We also collect anonymous device/user IDs to sync your data.
              </li>
              <li>
                <strong>Camera Permissions:</strong> The app requests access to your device's camera locally solely for the purpose of scanning QR codes to join multiplayer sessions.
              </li>
              <li>
                <strong>Game Data:</strong> We collect game scores, balances, and round histories (who won/lost and amounts) to sync across devices.
              </li>
              <li>
                <strong>Account Information:</strong> No manual account creation is required. We use Firebase Anonymous Authentication in the background to seamlessly assign a unique ID to each user. No email, password, or social sign-in is required.
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
                To track and calculate scores for your physical Teen Patti card games.
              </li>
              <li>
                To facilitate account creation, secure login processes, and cloud sync.
              </li>
              <li>
                To save your game session history and allow you to view past scores across
                devices.
              </li>
              <li>To improve our app features, functionality, and performance in compliance with Apple App Store guidelines.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              3. Data Storage and Security
            </h2>
            <p>
              Data is cached locally on your device and synced in real-time to a secure cloud database (Firebase Firestore) so multiple players can view and update the same game session from different devices. We implement appropriate technical and organizational measures to protect your data, but please note that no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              4. Third-Party Services
            </h2>
            <p>
              We use the following third-party services for app functionality, synchronization, and performance monitoring:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Firebase Firestore:</strong> For real-time database sync.
              </li>
              <li>
                <strong>Firebase Authentication:</strong> For anonymous background logins.
              </li>
              <li>
                <strong>Firebase Analytics:</strong> For usage analytics to improve the app.
              </li>
              <li>
                <strong>Sentry:</strong> For crash reporting and application monitoring.
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
                href="https://teenpattitracker.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
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

export default PrivacyPolicyPage
