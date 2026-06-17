import React from 'react'
import Container from '../global/container'
import AnimateWrapper from '../global/animate-wrapper'
const steps = [
  {
    number: '1',
    title: 'Download & Install',
    description:
      'Download the app from our website or app store. Setup takes just a few seconds.',
  },
  {
    number: '2',
    title: 'Create a Session',
    description:
      'Create a new game session and invite your friends. Add players to the table easily.',
  },
  {
    number: '3',
    title: 'Start Tracking',
    description:
      'Start playing with real cards while the app tracks rounds, scores, and dealer rotations flawlessly.',
  },
]
const StepsSection = () => {
  return (
    <Container
      id="how-to-use"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <AnimateWrapper>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-pretty">
              Three Steps to Start Tracking
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light text-pretty">
              Get started in minutes. No complicated steps, just straightforward
              game tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col">
                {/* Step Number - Minimal Circle */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 text-lg font-bold text-primary">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-base">
                    {step.description}
                  </p>
                </div>

                {/* Subtle separator line between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/3 top-20 w-px h-12 bg-border mt-8" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom accent line */}
          <div className="mt-16 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              Quick & Easy
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>
      </AnimateWrapper>
    </Container>
  )
}

export default StepsSection
