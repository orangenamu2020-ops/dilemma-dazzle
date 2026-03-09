/**
 * 공유 유틸리티 (카카오 SDK 연동)
 */

declare global {
  interface Window {
    Kakao: any;
  }
}

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

/** 카카오톡으로 공유 (공식 SDK) */
export function shareToKakao(data: ShareData): void {
  const url = window.location.origin;

  if (window.Kakao && window.Kakao.Share) {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `${data.emoji} 나의 ${data.categoryName} 유형: ${data.title}`,
        description: data.description,
        imageUrl: `${url}/og-image.png`,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "나도 해보기 ⚖️",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  } else {
    // SDK 로드 실패 시 fallback
    const text = getShareText(data);
    const fullText = `${text}\n\n나도 해보기 👉 ${url}`;
    navigator.clipboard.writeText(fullText).catch(() => {});
    window.open(`https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(url)}`, "_blank");
  }
}
