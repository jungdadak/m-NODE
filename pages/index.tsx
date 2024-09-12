import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/welcome.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const line = document.querySelector(`.${styles.line}`) as HTMLElement;
    const horizontalNode = document.querySelector(`.${styles.horizontalNode}`) as HTMLElement;
    const expands = document.querySelectorAll(`.${styles.expand}`) as NodeListOf<HTMLElement>;
    const verticalNode = document.querySelector(`.${styles.verticalNode}`) as HTMLElement;
    const fadedNode = document.querySelector(`.${styles.fadedNode}`) as HTMLElement;

    function setInitialPositions() {
      const containerHeight = window.innerHeight;
      const linePosition = containerHeight / 2;
      
      // GPU 가속이 가능한 transform 속성으로 전환
      line.style.transform = `translateY(${linePosition}px)`;
    }

    setInitialPositions();
    window.addEventListener('resize', setInitialPositions);

    expands.forEach((expand, index) => {
      const delay = index * 1;
      expand.style.animationDelay = `${delay}s`;
    });

    const lastExpandDelay = (expands.length - 1) * 1;

    // 애니메이션 최적화: transform과 opacity를 사용하여 GPU 가속 활용
    setTimeout(() => {
      verticalNode.style.animation = `${styles.foldUp} 0.3s forwards`;
    }, (lastExpandDelay + 1.5 + 0.3) * 1000);

    setTimeout(() => {
      line.style.opacity = '1';
      line.style.animation = `${styles.drawLine} 0.5s forwards`;
    }, (lastExpandDelay + 2 + 0.1) * 1000);

    setTimeout(() => {
      horizontalNode.style.opacity = '1';
      horizontalNode.style.animation = `${styles.moveIn} 0.5s forwards`;
    }, (lastExpandDelay + 2.3 + 0.6) * 1000);

    setTimeout(() => {
      fadedNode.style.opacity = '1';
    }, (lastExpandDelay + 2.3 + 1.0) * 1000);

    return () => {
      window.removeEventListener('resize', setInitialPositions);
    };
  }, []);

  // 화면 클릭 시 /main으로 이동
  const handleClick = () => {
    router.push('/main');
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.verticalNode}>
        <div className={styles.letter} id="n">
          N
          <div className={styles.expand}>obody</div>
        </div>
        <div className={styles.letter} id="o">
          O
          <div className={styles.expand}>verlooked,</div>
        </div>
        <div className={styles.letter} id="d">
          D
          <div className={styles.expand}>iversity</div>
        </div>
        <div className={styles.letter} id="e">
          E
          <div className={styles.expand}>mbraced</div>
        </div>
      </div>

      <div className={styles.nodeGroup}>
        <div className={styles.horizontalNode}>NODE.</div>
        <div className={styles.line}></div>
        <div className={styles.fadedNode}>NODE</div>
      </div>
    </div>
  );
}
