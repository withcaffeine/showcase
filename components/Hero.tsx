"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-400/10 pt-20">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-[10%] h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="animate-float-delayed absolute top-40 right-[15%] h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />
        <div className="animate-pulse-slow absolute bottom-20 left-[30%] h-64 w-64 rounded-full bg-primary-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 pb-16 md:pt-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-primary-400" />
            동네 탐색의 새로운 기준
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-center text-4xl leading-tight font-extrabold tracking-tight text-primary-950 md:text-6xl md:leading-tight"
        >
          내 동네,{" "}
          <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            제대로 알고
          </span>
          <br />
          살펴보세요
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-center text-lg leading-relaxed text-primary-800/60 md:text-xl"
        >
          임장노트부터 도달권 분석, 동네 커뮤니티까지.
          <br className="hidden md:block" />
          이사·임장 고민, 우리동네 앱 하나로 해결하세요.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="https://apps.apple.com/kr/app/%EC%9A%B0%EB%A6%AC%EB%8F%99%EB%84%A4-%EC%9E%84%EC%9E%A5%EB%85%B8%ED%8A%B8%EB%B6%80%ED%84%B0-%EC%9D%B4%EC%9B%83-%EC%9D%B4%EC%95%BC%EA%B8%B0%EA%B9%8C%EC%A7%80/id6758015956"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl bg-primary-950 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary-950/20 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary-950/30"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store에서 다운로드
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 rounded-2xl border-2 border-primary-200 bg-white/50 px-8 py-4 text-base font-semibold text-primary-700 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:bg-white"
          >
            자세히 알아보기
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </motion.div>

        {/* App screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-16 flex w-full max-w-4xl items-end justify-center gap-4 md:gap-6"
        >
          {/* Left screenshot */}
          <div className="w-[140px] flex-shrink-0 -translate-y-4 md:w-[220px]">
            <img
              src="/screenshots/aso_fieldnote_list_blurred.png"
              alt="임장노트 화면"
              className="rounded-2xl shadow-2xl shadow-primary-900/15 md:rounded-3xl"
            />
          </div>
          {/* Center screenshot (larger) */}
          <div className="w-[170px] flex-shrink-0 md:w-[260px]">
            <img
              src="/screenshots/aso_reachability_result.png"
              alt="도달권 분석 결과 화면"
              className="rounded-2xl shadow-2xl shadow-primary-900/20 md:rounded-3xl"
            />
          </div>
          {/* Right screenshot */}
          <div className="w-[140px] flex-shrink-0 -translate-y-4 md:w-[220px]">
            <img
              src="/screenshots/aso_community.png"
              alt="커뮤니티 화면"
              className="rounded-2xl shadow-2xl shadow-primary-900/15 md:rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
