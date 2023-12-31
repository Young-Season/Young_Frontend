import React, { useEffect } from 'react';

const KakaoShareButton = () => {
  const kakaoKey = '상단에서 받은 javaScript키를 입력해주세요'; // 카카오 JavaScript 키
  const requestUrl = 'URL 주소 입력'; // 공유할 URL
  const templateId = '템플릿 아이디를 넣어주세요'; // 템플릿 ID

  useEffect(() => {
    // 카카오 SDK 스크립트를 동적으로 로드합니다.
    const script = document.createElement('script');
    script.src = '//developers.kakao.com/sdk/js/kakao.min.js';
    script.onload = () => {
      window.Kakao.init(kakaoKey);
      window.Kakao.Link.createScrapButton({
        container: '#kakao-link-btn',
        requestUrl: requestUrl,
        userId: `${userId}`,
      });
    };
    document.head.appendChild(script);

    // 컴포넌트가 언마운트될 때 스크립트를 제거합니다.
    return () => {
      document.head.removeChild(script);
    };
  }, [kakaoKey, requestUrl, templateId]);

  return (
    <div id="btnKakao">
      <img src="/img/sns_kakao.png" id="kakao-link-btn" alt="카카오톡 링크 공유하기" />
    </div>
  );
};

export default KakaoShareButton;
