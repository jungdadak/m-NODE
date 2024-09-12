import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';

const MainPage: React.FC = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [loadedIframes, setLoadedIframes] = useState<number[]>([]); // 로드된 iframe 추적
  const [dotCount, setDotCount] = useState(0); // Noading 애니메이션의 점 개수 상태
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 관리

  useEffect(() => {
    fetch('/data/insta.json')
      .then((response) => response.json())
      .then((data) => setAccounts(data))
      .catch((error) => console.error('Error fetching Instagram accounts:', error));
  }, []);

  // 점 개수를 0123으로 순차적으로 바꾸는 애니메이션 (0.2초 간격)
  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev === 3 ? 0 : prev + 1));
    }, 200); // 0.2초마다 점 개수 변경

    return () => clearInterval(interval);
  }, []);

  const handleIframeLoad = (index: number) => {
    setLoadedIframes((prev) => [...prev, index]); // 로드된 iframe 인덱스를 저장
  };

  // Enter 키를 눌렀을 때 돋보기 버튼을 클릭한 것과 동일한 동작
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // 검색 버튼 클릭 동작
      handleSearch();
    }
  };

  const handleSearch = () => {
    // 검색 로직 추가
    console.log('Search:', searchTerm);
  };

  return (
    <Layout>
      <div className="main-container">
        {/* 검색바 */}
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress} // Enter를 눌렀을 때 이벤트
            className="search-input"
          />
          <button className="search-button" onClick={handleSearch}>
            <img src="/images/돋보기.png" alt="Search" className="search-icon" />
          </button>
        </div>

        <div className="instagram-embeds">
          {accounts.map((account, index) => (
            <div className="instagram-embed" key={account.accountName}>
              <iframe
                src={`https://www.instagram.com/${account.accountName}/embed`}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                onLoad={() => handleIframeLoad(index)} // iframe 로드 완료 시 처리
              ></iframe>
              {!loadedIframes.includes(index) && ( // 로딩 중일 때만 Noading 표시
                <div className="loading-overlay">
                  <p>Noading{Array(dotCount + 1).fill('.').join('')}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          max-width: 100%;
          background-color: rgb(71, 79, 138);
          min-height: 100vh;
        }

        /* 검색바 컨테이너 */
        .search-bar-container {
          display: flex;
          align-items: center;
          width: 85%; /* 네비게이션 바의 60% 두께 */
          margin-bottom: 20px;
        }

        /* 검색 입력 필드 */
        .search-input {
          width: 100%;
          padding: 10px;
          border: 2px solid #ccc;
          border-radius: 8px 0 0 8px;
          font-size: 16px;
          outline: none;
        }

        .search-button {
          width: 50px;
          height: 50px; /* 8x8 사이즈로 착각할 수 있으니 height 추가 */
          background-color: rgb(71, 79, 138); /* 색상 변경 */
          border: none;
          border-radius: 0 8px 8px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer; 
          position: relative;
          top: 5px;
        }

        /* 돋보기 이미지 */
        .search-icon {
          width: 60px;
          height: 60px;
        }

        .instagram-embeds {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .instagram-embed {
          position: relative; /* 로딩 애니메이션을 겹치기 위한 상대 위치 설정 */
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          max-width: 100%;
          aspect-ratio: 2.13 / 1;
          overflow: hidden;
          background-color: rgb(71, 79, 138);
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.8); /* 약간 투명한 배경 */
          z-index: 10; /* iframe 위에 로딩 애니메이션이 표시되도록 설정 */
        }

        .loading-overlay p {
          font-size: 54px;
          font-weight: bold;
          font-family: Arial, sans-serif;
        }
      `}</style>
    </Layout>
  );
};

export default MainPage;

