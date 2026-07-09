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
            Last Updated: 7 June 2026
          </p>
        </div>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            <strong>Cheater Ludo</strong> ("the App") is developed by Everest Technologies. This Privacy Policy explains what information the App collects and how it is used.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p>
              Cheater Ludo is designed to run primarily offline. The App does <strong>not</strong> require an account, login, or personal information to play.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Game save data:</strong> The App stores your in-progress game state (board positions, player turns, scores) locally on your device using standard local storage. This data never leaves your device and is not transmitted to us or any third party.
              </li>
              <li>
                <strong>No personal data collection:</strong> We do not collect your name, email, contact list, location, or any other personally identifiable information.
              </li>
              <li>
                <strong>No analytics or tracking:</strong> The App does not currently use analytics, advertising, or tracking SDKs.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Children's Privacy
            </h2>
            <p>
              Cheater Ludo does not knowingly collect information from children. Since the App collects no personal data at all, it does not pose the risks associated with apps that gather user information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Data Sharing
            </h2>
            <p>
              We do not sell, rent, or share any data with third parties, because we do not collect any data to share.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p>
              Questions about this Privacy Policy can be directed to: <br />
              <strong className="mt-2 block">
                info@everesttechnologies.com.np
              </strong>
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}

export default PrivacyPolicyPage
