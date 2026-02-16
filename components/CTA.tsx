"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-400/10 py-24 md:py-32"
    >
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="animate-float absolute top-10 left-[20%] h-40 w-40 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="animate-float-delayed absolute bottom-10 right-[20%] h-56 w-56 rounded-full bg-accent-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary-950 md:text-5xl">
            지금 바로 시작하세요
          </h2>
          <p className="mt-4 text-lg text-primary-800/50 md:text-xl">
            이사·임장 고민, 우리동네 앱 하나로 해결하세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="https://apps.apple.com/kr/app/%EC%9A%B0%EB%A6%AC%EB%8F%99%EB%84%A4-%EC%9E%84%EC%9E%A5%EB%85%B8%ED%8A%B8%EB%B6%80%ED%84%B0-%EC%9D%B4%EC%9B%83-%EC%9D%B4%EC%95%BC%EA%B8%B0%EA%B9%8C%EC%A7%80/id6758015956"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-primary-950 px-10 py-5 text-lg font-semibold text-white shadow-xl shadow-primary-950/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-950/30"
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store에서 다운로드
          </a>
          <p className="mt-6 text-sm text-primary-800/40">
            iOS 16.0 이상 지원 &middot; 무료 다운로드
          </p>
        </motion.div>
      </div>
    </section>
  );
}
