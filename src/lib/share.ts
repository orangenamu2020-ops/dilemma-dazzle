/**
 * 공유 유틸리티
 * - 일반 공유: 시스템 공유 우선, 실패 시 링크 복사
 * - 카카오톡 공유: 링크 복사 후 카카오톡 앱 열기 시도
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

/** 공유용 링크 */
function getShareUrl(): string {
  return 'https://mindbalance.private-apps.tossmini.com';
}

/** 카카오톡 앱 열기 시도 */
function openKakaoTalk(): void {
  try {
    window.location.href = 'kakaotalk://';
  } catch (error) {
    console.error('[Open KakaoTalk]', error);
  }
}

/** 일반 공유 */
export async function shareResult(data: ShareData): Promise<boolean> {
  const text = getShareText(data);
  const url = getShareUrl();

  if (navigator.share) {
    try {
      await navigator.share({
        title: `나의 ${data.categoryName} 유형: ${data.title}`,
        text,
        url,
      });
      return true;
    } catch (error) {
      console.error('[Navigator Share]', error);
    }
  }

  try {
    await navigator.clipboard.writeText(`${text}\n${url}`);
    alert('링크를 복사했어요.');
    return true;
  } catch (error) {
    console.error('[Clipboard Share]', error);
    alert('링크 복사에 실패했어요.');
    return false;
  }
}

/** 카카오톡으로 공유 */
export async function shareToKakao(data: ShareData): Promise<boolean> {
  const text = getShareText(data);
  const url = getShareUrl();
  const fullText = `${text}\n\n나도 해보기 👉 ${url}`;

  try {
    await navigator.clipboard.writeText(fullText);
    alert('링크를 복사했어요. 카카오톡에서 붙여넣어 공유해 주세요.');

    setTimeout(() => {
      openKakaoTalk();
    }, 200);

    return true;
  } catch (error) {
    console.error('[Kakao Share Fallback]', error);
    alert('링크 복사에 실패했어요.');
    return false;
  }
}