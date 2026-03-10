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

const INTERSTITIAL_AD_ID = "ait-ad-test-interstitial-id";

/**
 * 앱인토스 전면형 광고 표시
 * - 토스 앱 내: @apps-in-toss/web-framework SDK 사용
 * - 그 외: 시뮬레이션 (5초 대기)
 */
export async function showTossInterstitialAd(): Promise<boolean> {
  try {
    const { GoogleAdMob } = await import("@apps-in-toss/web-framework");

    // 광고 로드 확인
    const isLoaded = await GoogleAdMob.isAppsInTossAdMobLoaded({ adUnitId: INTERSTITIAL_AD_ID });
    
    if (!isLoaded) {
      // 광고 로드
      await new Promise<void>((resolve, reject) => {
        const unsubscribe = GoogleAdMob.loadAppsInTossAdMob({
          onEvent: (event) => {
            if (event.type === "loaded") {
              console.log("[TossAd] 전면 광고 로드 완료");
              unsubscribe();
              resolve();
            }
            if (event.type === "failed_to_load") {
              console.error("[TossAd] 광고 로드 실패");
              unsubscribe();
              reject(new Error("Ad load failed"));
            }
          },
          onError: (err) => {
            console.error("[TossAd] 로드 에러", err);
            unsubscribe();
            reject(err);
          },
          options: { adUnitId: INTERSTITIAL_AD_ID, adType: "interstitial" },
        });
      });
    }

    // 광고 표시
    return new Promise<boolean>((resolve) => {
      const unsubscribe = GoogleAdMob.showAppsInTossAdMob({
        onEvent: (event) => {
          if (event.type === "dismissed" || event.type === "closed") {
            console.log("[TossAd] 전면 광고 닫힘");
            unsubscribe();
            resolve(true);
          }
          if (event.type === "failed_to_show") {
            console.error("[TossAd] 광고 표시 실패");
            unsubscribe();
            resolve(false);
          }
        },
        onError: (err) => {
          console.error("[TossAd] 표시 에러", err);
          unsubscribe();
          resolve(false);
        },
        options: { adUnitId: INTERSTITIAL_AD_ID, adType: "interstitial" },
      });
    });
  } catch (err) {
    console.log("[TossAd] SDK 사용 불가, 시뮬레이션 실행", err);
    return simulateAd();
  }
}

/** 시뮬레이션 광고 (비토스 환경용) */
function simulateAd(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("[TossAd] 시뮬레이션 광고 완료");
      resolve(true);
    }, 5000);
  });
}

/** 토스 미니앱 닫기 */
export function closeTossMiniApp(): void {
  console.log("[Toss] 미니앱 닫기 호출");
  if (window.history.length > 1) {
    window.history.back();
  }
}
