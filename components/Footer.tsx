export default function Footer() {
  return (
    <footer className="border-t border-primary-100 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div>
          <span className="text-lg font-bold text-primary-700">우리동네</span>
          <p className="mt-1 text-sm text-primary-800/40">
            내 동네, 제대로 알고 살펴보세요.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-primary-800/50">
          <a href="https://withcaffeine.github.io/docs/terms-of-service.html" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-600">
            이용약관
          </a>
          <a href="https://withcaffeine.github.io/docs/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-600">
            개인정보처리방침
          </a>
          <a href="mailto:payton.suh@gmail.com" className="transition-colors hover:text-primary-600">
            고객센터
          </a>
        </div>
        <p className="text-xs text-primary-800/30">
          &copy; 2026 우리동네. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
