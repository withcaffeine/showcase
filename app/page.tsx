import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeatureDetail from "@/components/FeatureDetail";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

function ScreenshotGroup({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="flex items-start gap-3">
      {images.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="w-1/2 rounded-2xl shadow-lg"
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />

      {/* Feature Details */}
      <div className="bg-primary-50/30">
        <FeatureDetail
          badge="임장노트"
          title="현장의 모든 것을 기록하세요"
          description="동네를 방문하고 체크리스트로 기록하세요. 항목별 평가 결과를 임장 리포트로 한눈에 확인할 수 있습니다."
          bullets={[
            "교통, 학군, 상권 등 항목별 체크리스트",
            "별점 평가로 객관적인 임장 기록",
            "항목별 평가 결과를 리포트로 확인",
            "이전 임장 기록과 비교 분석",
          ]}
          gradient="from-primary-600/90 to-primary-800/90"
          mockupContent={
            <ScreenshotGroup
              images={[
                { src: "/screenshots/aso_fieldnote_list_blurred.png", alt: "임장노트 목록" },
                { src: "/screenshots/aso_fieldnote_report_blurred.png", alt: "임장 리포트" },
              ]}
            />
          }
        />
      </div>

      <FeatureDetail
        badge="도달권 분석"
        title="입지, 한눈에 파악하세요"
        description="도보 기준으로 갈 수 있는 범위를 확인하세요. 주변 시설을 지도로 한눈에 파악할 수 있습니다."
        bullets={[
          "도보 5분·10분·15분 도달권 시각화",
          "어린이집, 학교, 마트 등 주변 시설 확인",
          "시설별 상세 정보 및 거리 표시",
          "관심 동네 저장 및 비교",
        ]}
        reversed
        gradient="from-primary-500/90 to-primary-700/90"
        mockupContent={
          <ScreenshotGroup
            images={[
              { src: "/screenshots/aso_explore_entry.png", alt: "도달권 탐색" },
              { src: "/screenshots/aso_reachability_result.png", alt: "도달권 결과" },
            ]}
          />
        }
      />

      <div className="bg-primary-50/30">
        <FeatureDetail
          badge="커뮤니티"
          title="이웃의 생생한 이야기"
          description="우리 동네 이웃과 소통하세요. 동네 주민들의 생생한 이야기와 궁금한 건 이웃에게 물어볼 수 있습니다."
          bullets={[
            "내 동네·온 동네 실시간 커뮤니티",
            "부동산, 학군, 육아 등 다양한 주제",
            "동네 생활 맞춤 질문 추천",
            "관심 지역 알림 설정",
          ]}
          gradient="from-accent-500/90 to-primary-600/90"
          mockupContent={
            <ScreenshotGroup
              images={[
                { src: "/screenshots/aso_community.png", alt: "커뮤니티" },
                { src: "/screenshots/aso_question.png", alt: "질문 추천" },
              ]}
            />
          }
        />
      </div>

      <CTA />
      <Footer />
    </main>
  );
}
