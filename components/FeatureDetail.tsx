"use client";

import AnimatedSection from "./AnimatedSection";

interface FeatureDetailProps {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  reversed?: boolean;
  gradient: string;
  mockupContent: React.ReactNode;
}

export default function FeatureDetail({
  badge,
  title,
  description,
  bullets,
  reversed = false,
  gradient,
  mockupContent,
}: FeatureDetailProps) {
  return (
    <section className="py-20 md:py-28">
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:gap-16 ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Text */}
        <AnimatedSection
          direction={reversed ? "right" : "left"}
          className="flex-1"
        >
          <span
            className={`inline-block rounded-full bg-gradient-to-r ${gradient} px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase`}
          >
            {badge}
          </span>
          <h3 className="mt-5 text-3xl font-bold text-primary-950 md:text-4xl">
            {title}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-primary-800/60">
            {description}
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-primary-800/70">{bullet}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Mockup */}
        <AnimatedSection
          direction={reversed ? "left" : "right"}
          delay={0.2}
          className="flex-1"
        >
          <div
            className={`overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-8 shadow-2xl md:p-12`}
          >
            {mockupContent}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
