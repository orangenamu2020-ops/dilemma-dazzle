/**
 * 공유 유틸리티
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

/** 카카오톡 공유 (SDK 연동 후 활성화) */
export function shareToKakao(data: ShareData): void {
  // TODO: 카카오 SDK 연동 후 활성화
  // Kakao.Share.sendDefault({
  //   objectType: 'feed',
  //   content: {
  //     title: `${data.emoji} ${data.title}`,
  //     description: data.description,
  //     imageUrl: `${window.location.origin}/og-image.png`,
  //     link: { mobileWebUrl: window.location.origin, webUrl: window.location.origin },
  //   },
  //   buttons: [{
  //     title: '나도 해보기',
  //     link: { mobileWebUrl: window.location.origin, webUrl: window.location.origin },
  //   }],
  // });

  // Fallback: 카카오톡 URL 스킴
  const text = encodeURIComponent(getShareText(data));
  const url = encodeURIComponent(window.location.origin);
  window.open(`https://story.kakao.com/share?url=${url}&text=${text}`, "_blank");
}
