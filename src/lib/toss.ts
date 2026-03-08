/**
 * 토스 인앱 환경 감지 및 유틸리티
 */

/** 토스 앱 인앱 브라우저인지 감지 */
export function isTossApp(): boolean {
  if (typeof navigator === "undefined") return false;
  return /TossApp/i.test(navigator.userAgent);
}

/** 토스 미니앱(앱인토스) 환경인지 감지 */
export function isTossMiniApp(): boolean {
  if (typeof navigator === "undefined") return false;
  return /TossApp/i.test(navigator.userAgent) && /miniapp/i.test(navigator.userAgent);
}

/** 모바일 환경인지 감지 */
export function isMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

/** 앱인토스 리워드 광고 표시 (SDK 연동 후 대체) */
export async function showTossRewardAd(): Promise<boolean> {
  // TODO: 토스 승인 후 실제 앱인토스 SDK로 교체
  // 현재는 시뮬레이션 (5초 대기)
  console.log("[TossAd] 리워드 광고 요청 (시뮬레이션)");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("[TossAd] 리워드 광고 완료 (시뮬레이션)");
      resolve(true);
    }, 5000);
  });
}

/** 토스 미니앱 닫기 */
export function closeTossMiniApp(): void {
  // TODO: 토스 SDK의 toss.close() 호출
  console.log("[Toss] 미니앱 닫기 호출");
  if (window.history.length > 1) {
    window.history.back();
  }
}
