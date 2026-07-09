import Container from '@/components/global/container'
import React from 'react'

const TermsAndConditionPage = () => {
  return (
    <Container className="py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground text-sm">
            Last Updated: 7 June 2026
          </p>
        </div>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or playing Cheater Ludo, you agree to these Terms and Conditions. If you do not agree, please do not use the App.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              2. Description of the App
            </h2>
            <p>
              Cheater Ludo is a casual party-style Ludo game for entertainment purposes. Unlike a standard Ludo game, Cheater Ludo includes a <strong>hidden dice-rigging mechanic</strong>: any player may secretly designate a "guaranteed winner" during a match, causing the dice to bias its results toward that outcome without other players being explicitly informed in-game of when this occurs.
            </p>
            <p>
              This mechanic is the core feature of the App and is disclosed openly in the App's store listing and description. By playing, you acknowledge and accept that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The dice results in this game <strong>can be intentionally manipulated</strong> by a player using a hidden in-game action.
              </li>
              <li>
                This manipulation is a <strong>deliberate game feature</strong>, intended for humor and playful deception among willing participants — not a bug or unfair advantage granted without your knowledge of the App's nature.
              </li>
              <li>
                Cheater Ludo is intended for <strong>casual, for-fun play</strong> among friends or family who are aware of and consent to this mechanic being part of the game.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              3. No Real-Money Gambling
            </h2>
            <p>
              Cheater Ludo does <strong>not</strong> involve real-money wagering, in-app purchases tied to gambling, or any mechanism for withdrawing real currency. Any use of the App to facilitate real-money betting between players is done entirely outside the App, at users' own risk, and is not endorsed, supported, or facilitated by the developer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              4. Appropriate Use
            </h2>
            <p>
              You agree not to use Cheater Ludo to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Defraud, deceive, or manipulate any person in a context involving real money, real property, or real consequences without their knowledge and consent.
              </li>
              <li>
                Misrepresent the nature of the App to another player in order to cause them financial or material harm.
              </li>
            </ul>
            <p>
              The developer disclaims liability for any misuse of the App's rigging mechanic outside the intended casual, consensual, for-fun context described in this document and the App's store listing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              5. Intellectual Property
            </h2>
            <p>
              All game assets, artwork, and code within Cheater Ludo are the property of [YOUR NAME / COMPANY NAME] unless otherwise credited (e.g., third-party assets used under their respective licenses). You may not redistribute, resell, or repackage the App without permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              6. Disclaimer of Warranty
            </h2>
            <p>
              Cheater Ludo is provided "as is" without warranties of any kind, express or implied. We do not guarantee the App will be error-free or uninterrupted.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, [YOUR NAME / COMPANY NAME] shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App, including any disputes between players arising from use of the rigging mechanic.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              8. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms at any time. Continued use of the App after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              9. Contact
            </h2>
            <p>
              Questions about these Terms can be directed to: <br />
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

export default TermsAndConditionPage
