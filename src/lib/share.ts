/**
 * 공유 유틸리티 (외부 SDK 불필요)
 */

interface ShareData {
  categoryName: string;
  title: string;
  emoji: string;
  description: string;
}

/** 결과 공유 텍스트 생성 */
export function getShareText(data: ShareData): string {
  return `${data.emoji} 나의 ${data.categoryName} 유형: ${data.title}\n\n${data.description}\n\n밸런스 게임으로 나의 유형을 알아보세요! ⚖️`;
}

/** 네이티브 공유 API 사용 */
export async function shareResult(data: ShareData): Promise<boolean> {
  const text = getShareText(data);
  const url = window.location.origin;

  if (navigator.share) {
    try {
      await navigator.share({
        title: `나의 ${data.categoryName} 유형: ${data.title}`,
        text,
        url,
      });
      return true;
    } catch {
      return false;
    }
  }

  // Fallback: 클립보드 복사
  try {
    await navigator.clipboard.writeText(`${text}\n${url}`);
    return true;
  } catch {
    return false;
  }
}

/** 카카오톡으로 공유 (SDK 불필요, URL 스킴 활용) */
export function shareToKakao(data: ShareData): void {
  const text = `${data.emoji} 나의 ${data.categoryName} 유형: ${data.title}\n${data.description}`;
  const url = window.location.origin;
  const fullText = `${text}\n\n나도 해보기 👉 ${url}`;

  // 모바일: 카카오톡 URL 스킴으로 텍스트 전송
  // 카카오톡이 설치되어 있으면 바로 열림
  const encodedText = encodeURIComponent(fullText);

  // 카카오톡 공유 URL 스킴 (모바일)
  const kakaoUrl = `https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(url)}&text=${encodedText}`;

  // 모바일에서는 navigator.share가 카카오톡 포함, 
  // 그래서 카카오톡 버튼은 클립보드 복사 + 카톡 열기 조합으로 구현
  if (/Android|iPhone/i.test(navigator.userAgent)) {
    // 클립보드에 먼저 복사
    navigator.clipboard.writeText(fullText).catch(() => {});
    // 카카오톡 열기 시도
    window.location.href = `kakaotalk://msg?text=${encodedText}`;

    // 카카오톡이 없으면 2초 후 웹 fallback
    setTimeout(() => {
      window.open(kakaoUrl, "_blank");
    }, 1500);
  } else {
    // 데스크톱: 웹 공유
    window.open(kakaoUrl, "_blank", "width=480,height=640");
  }
}
