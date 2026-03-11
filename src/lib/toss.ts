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

const AD_GROUP_ID = "ait-ad-test-rewarded-id";

/**
 * 앱인토스 리워드 광고 표시
 * - 토스 앱 내: @apps-in-toss/web-framework SDK 사용
 * - 그 외: 시뮬레이션 (5초 대기)
 */
export async function showTossRewardedAd(): Promise<boolean> {
  try {
    const { GoogleAdMob } = await import("@apps-in-toss/web-framework");

    const loadSupported = GoogleAdMob.loadAppsInTossAdMob.isSupported();
    const showSupported = GoogleAdMob.showAppsInTossAdMob.isSupported();

    if (loadSupported !== true || showSupported !== true) {
      console.log("[TossAd] 리워드 광고 미지원 환경, 시뮬레이션 실행");
      return simulateAd();
    }

    // 1) 광고 로드
    await new Promise<void>((resolve, reject) => {
      const unsubscribe = GoogleAdMob.loadAppsInTossAdMob({
        options: { adGroupId: AD_GROUP_ID },
        onEvent: (event) => {
          if (event.type === "loaded") {
            console.log("[TossAd] 리워드 광고 로드 완료");
            unsubscribe();
            resolve();
          }
        },
        onError: (err) => {
          console.error("[TossAd] 로드 에러", err);
          unsubscribe();
          reject(err);
        },
      });
    });

    // 2) 광고 표시
    return new Promise<boolean>((resolve) => {
      let rewarded = false;

      const unsubscribe = GoogleAdMob.showAppsInTossAdMob({
        options: { adGroupId: AD_GROUP_ID },
        onEvent: (event) => {
          if (event.type === "show" || event.type === "impression") {
            console.log("[TossAd] 리워드 광고 표시 중");
          }

          if (event.type === "userEarnedReward") {
            console.log("[TossAd] 리워드 지급 완료");
            rewarded = true;
          }

          if (event.type === "dismissed") {
            console.log("[TossAd] 리워드 광고 닫힘");
            unsubscribe();
            resolve(rewarded);
          }

          if (event.type === "failedToShow") {
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
      console.log("[TossAd] 시뮬레이션 리워드 광고 완료");
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