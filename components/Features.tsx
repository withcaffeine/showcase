"use client";

import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    title: "임장노트",
    description:
      "현장에서 바로 기록하는 스마트 임장 노트. 사진, 메모, 체크리스트를 한곳에서 관리하세요.",
    gradient: "from-primary-500 to-primary-700",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "도달권 분석",
    description:
      "지하철, 학교, 편의시설까지의 도달권을 한눈에. 입지 분석의 핵심을 시각화합니다.",
    gradient: "from-primary-500 to-accent-500",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "커뮤니티",
    description:
      "같은 동네, 같은 관심사를 가진 이웃과 소통하세요. 생생한 현지 정보를 공유합니다.",
    gradient: "from-accent-500 to-primary-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="text-center">
          <span className="text-sm font-semibold tracking-wider text-primary-500 uppercase">
            핵심 기능
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary-950 md:text-5xl">
            동네 탐색, 이렇게 달라집니다
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-800/50">
            이사·임장 전 궁금한 것들, 우리동네 앱으로 한번에
            해결하세요.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.15}>
              <div className="group relative overflow-hidden rounded-3xl border border-primary-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-900/5">
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 text-white shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-950">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-primary-800/60">
                  {feature.description}
                </p>
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.gradient} transition-all duration-500 group-hover:w-full`}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
