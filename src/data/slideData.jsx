// slideData.js
import SatteliteDevImage from '../assets/image.jpg';
import DataAnalysisImage from '../assets/data_analysis.jpg';
import JigyouAnalysisImage from '../assets/jigyou_analysis.jpg';

export const slideData = [
  {
    id: 1,
    image: SatteliteDevImage, // 画像ファイル名を適宜変更
    title: "衛星開発ゼミ（宇宙機開発分野）",
    description: "衛星開発で使用される主要な技術スタックとその応用例を紹介。",
    link: "/satellite-dev"
  },
  {
    id: 2,
    image: DataAnalysisImage, // 画像ファイル名を適宜変更
    title: "衛星データ解析ゼミ",
    description: "衛星データ解析で使用される主要な技術スタックとその応用例を紹介。",
    link: "/satellite-data"
  },
  {
    id: 3,
    image: JigyouAnalysisImage, // 画像ファイル名を適宜変更
    title: "宇宙事業分析ゼミ",
    description: "宇宙事業分析で使用される主要な技術スタックとその応用例を紹介。",
    link: "/space-business"
  }
];