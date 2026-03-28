import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeatureDetail from "@/components/FeatureDetail";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

function ScreenshotGroup({ images }: { images: { src: string; alt: string }[] }) {
  const widthClass = images.length === 3 ? "w-1/3" : "w-1/2";
  return (
    <div className="flex items-start gap-3">
      {images.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`${widthClass} rounded-2xl shadow-lg`}
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
          title="브리핑부터 채광 분석까지"
          description="관심 동네의 부동산 소식을 매일 브리핑으로 받아보세요. 방향만 선택하면 일조량을 자동 계산해주고, 체크리스트로 꼼꼼히 기록할 수 있습니다."
          bullets={[
            "동네별 부동산 소식 브리핑 제공",
            "실거래 내역(매매·전세) 실시간 확인",
            "방향 선택 시 채광 시간 자동 분석",
            "교통, 학군, 상권 등 항목별 리포트",
          ]}
          gradient="from-primary-600/90 to-primary-800/90"
          mockupContent={
            <ScreenshotGroup
              images={[
                { src: "/screenshots/aso_briefing.png", alt: "브리핑 화면" },
                { src: "/screenshots/aso_sunlight_analysis.png", alt: "채광 분석" },
              ]}
            />
          }
        />
      </div>

      <FeatureDetail
        badge="자동 평가"
        title="원클릭으로 입지 분석 끝"
        description="경사도·거점·노선까지 한번에 자동 분석합니다. 고도 프로필 차트로 역까지 실제 지형을 확인하고, 오르막·내리막을 반영한 실제 도보 시간을 알려드립니다."
        bullets={[
          "교통·학군·상권 원클릭 자동 평가",
          "역까지 고도 프로필 차트 제공",
          "경사도 반영 실제 도보 시간 계산",
          "항목별 별점으로 한눈에 비교",
        ]}
        reversed
        gradient="from-primary-500/90 to-accent-500/90"
        mockupContent={
          <ScreenshotGroup
            images={[
              { src: "/screenshots/aso_auto_rating_v2_final.png", alt: "자동 평가" },
              { src: "/screenshots/aso_slope_chart_final.png", alt: "고도 프로필 차트" },
              { src: "/screenshots/aso_slope_report_final.png", alt: "경사도 반영 교통 평가" },
            ]}
          />
        }
      />

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
