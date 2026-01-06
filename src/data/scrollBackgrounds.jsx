// 時間切り替え背景データ
// 一定間隔で切り替わる背景画像とその設定を管理

// 背景画像のインポート
import cosmicImg01 from '../assets/spacex_img.jpg';
// 必要に応じて追加の背景画像をインポート
// import cosmicImg02 from '../assets/cosmic_img02.jpg';
// import cosmicImg03 from '../assets/cosmic_img03.jpg';

/**
 * 時間切り替え背景データ
 * 
 * @property {string} id - 背景の識別子
 * @property {string} image - 背景画像のパス
 * @property {string} overlayColor - オーバーレイの色（rgba形式）
 */
export const timedBackgroundData = [
  {
    id: 'bg-1',
    image: cosmicImg01,
    overlayColor: 'rgba(11, 13, 23, 0.5)',
  },
  {
    id: 'bg-2',
    image: cosmicImg01, // 別の画像に変更可能
    overlayColor: 'rgba(20, 10, 40, 0.6)',
  },
  {
    id: 'bg-3',
    image: cosmicImg01, // 別の画像に変更可能
    overlayColor: 'rgba(10, 25, 35, 0.55)',
  },
  {
    id: 'bg-4',
    image: cosmicImg01, // 別の画像に変更可能
    overlayColor: 'rgba(30, 15, 25, 0.6)',
  },
];

/**
 * 背景切り替え設定
 */
export const backgroundConfig = {
  // 切り替え間隔（ミリ秒）
  interval: 8000,
  // フェード時間（ミリ秒）- CSSと合わせる
  fadeDuration: 1500,
};

export default timedBackgroundData;
