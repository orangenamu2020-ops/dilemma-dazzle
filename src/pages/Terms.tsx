export default function Terms() {
  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto px-5 py-8">
      <h1 className="text-xl font-bold text-foreground mb-6">이용약관</h1>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-semibold text-foreground mb-2">제1조 (목적)</h2>
          <p>본 약관은 밸런스 게임 심리테스트(이하 "서비스")의 이용 조건 및 절차에 관한 사항을 규정합니다.</p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">제2조 (서비스 내용)</h2>
          <p>서비스는 밸런스 게임 형태의 심리테스트를 제공하며, 사용자의 선택을 기반으로 성격 유형 분석 결과를 보여줍니다. 본 결과는 오락 목적으로 제공되며, 전문적인 심리 상담을 대체하지 않습니다.</p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">제3조 (개인정보 처리)</h2>
          <p>서비스는 별도의 회원가입을 요구하지 않으며, 사용자의 개인정보를 수집·저장하지 않습니다. 테스트 결과는 사용자의 기기에서만 처리되며 서버에 전송되지 않습니다.</p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">제4조 (지적재산권)</h2>
          <p>서비스에 포함된 콘텐츠(질문, 결과, 디자인 등)에 대한 저작권 및 지적재산권은 서비스 운영자에게 귀속됩니다.</p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">제5조 (면책사항)</h2>
          <p>서비스에서 제공하는 심리 분석 결과는 엔터테인먼트 목적이며, 의학적·심리학적 진단이 아닙니다. 서비스 이용으로 발생하는 문제에 대해 운영자는 책임을 지지 않습니다.</p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">제6조 (서비스 변경 및 중단)</h2>
          <p>운영자는 서비스의 내용을 변경하거나 중단할 수 있으며, 이에 대해 별도의 보상 의무를 지지 않습니다.</p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">제7조 (약관의 효력)</h2>
          <p>본 약관은 서비스 이용 시점부터 효력이 발생하며, 서비스를 이용하는 것은 본 약관에 동의한 것으로 간주합니다.</p>
        </section>

        <p className="text-xs text-muted-foreground pt-4 border-t border-border">
          시행일: 2026년 3월 9일
        </p>
      </div>
    </div>
  );
}
