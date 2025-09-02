"use client";

import { motion } from "framer-motion";
import { Card, CardContent, Button } from "@/components/ui/Card";
import { Check, Plane, Map, Calendar as CalendarIcon, Luggage, Clock, QrCode, Wand2, Compass, LineChart } from "lucide-react";

export default function Page() {
  return (
    <main className="p-6 md:p-10 space-y-8 font-sans max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center">Next Step Travel – プロダクト提案 / ロードマップ</h1>
        <p className="text-center text-gray-600 mt-2">AIが先回りして“次の一手”を提示する、迷わない旅行体験</p>
      </motion.div>

      <Card className="bg-gradient-to-r from-blue-50 to-white">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">🎯 コンセプト（ひと言）</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/70 border">
              <div className="flex items-center gap-2 mb-2"><Wand2 className="w-5 h-5"/><b>先回り</b></div>
              <p className="text-gray-700">旅程・位置・時間帯から、次に必要な行動カードを自動表示。</p>
            </div>
            <div className="p-4 rounded-xl bg白/70 border">
              <div className="flex items-center gap-2 mb-2"><CalendarIcon className="w-5 h-5"/><b>しおり一元化</b></div>
              <p className="text-gray-700">メール/スクショ/カレンダーから予約を吸い上げ、旅専用カレンダーに統合。</p>
            </div>
            <div className="p-4 rounded-xl bg-white/70 border">
              <div className="flex items-center gap-2 mb-2"><Compass className="w-5 h-5"/><b>楽さ優先</b></div>
              <p className="text-gray-700">Travel Effort Indexで「最安/最短」より“楽”を選びやすく。</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-50 to-white">
        <CardContent className="space-y-5">
          <h2 className="text-xl font-semibold">✨ コアバリュー（詳細）</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border">
              <div className="flex items-center gap-2 mb-2"><CalendarIcon className="w-5 h-5"/><b>Itinerary Hub（旅のしおり）</b></div>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Gmail OAuth / スクショOCR / .ics 取込 → カード自動生成</li>
                <li>日別タイムライン / 地図ビュー / 共有リンク</li>
                <li>変更メールを検知して差分更新</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white border">
              <div className="flex items-center gap-2 mb-2"><Plane className="w-5 h-5"/><b>到着カード（空港→ホテル）</b></div>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>到着30分前・到着時に自動表示</li>
                <li>🚆/🚌/🚖 を <b>料金・時間・体力指数</b>で比較</li>
                <li>子連れ/シニア/深夜/雨天を考慮</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white border">
              <div className="flex items-center gap-2 mb-2"><Map className="w-5 h-5"/><b>観光地カード（ホテル/現在地→スポット）</b></div>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>定番スポット → 周辺検索へ段階拡張</li>
                <li>徒歩/電車/タクシーの3択をシンプル表示</li>
                <li>坂・階段・混雑を指数に反映</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white border">
              <div className="flex items-center gap-2 mb-2"><Clock className="w-5 h-5"/><b>空き時間レコメンド（3軸）</b></div>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>🍴 食事 / 🛍️ 買い物 / 🎨 アクティビティ</li>
                <li>アクティビティは <b>複数OTA横断</b>（公平性）</li>
                <li>表示順はAIの“最適度”で並べ替え</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white border md:col-span-2">
              <div className="flex items-center gap-2 mb-2"><Luggage className="w-5 h-5"/><b>荷物配送・預かり</b></div>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>翌日午前着区間（東京⇄京都/大阪）を中心に推奨</li>
                <li>ホテル/空港/商業施設/コンビニの預け先を地図で表示</li>
                <li><span className="inline-flex items-center gap-1"><QrCode className="w-4 h-4"/>見せるだけ画面</span>：大きなピクト＋多言語＋QRで受付完了</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-amber-50 to-white">
        <CardContent>
          <h2 className="text-xl font-semibold mb-3">💪 Travel Effort Index（体力指数）</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border">
              <p className="text-gray-700">最安/最短ではなく、<b>“しんどさ”</b>で比較できる指標。1=楽 ←→ 5=大変。</p>
              <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                <li>荷物（スーツケース/ベビーカー）</li>
                <li>乗換回数 / 徒歩距離 / 階段・エレベータ有無</li>
                <li>混雑・スリリスク / 深夜 / 天候</li>
                <li>同行者属性（子連れ・シニア・車椅子）</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white border">
              <div className="flex items-center gap-2 mb-2"><LineChart className="w-5 h-5"/><b>UI 表示例</b></div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between rounded-lg border p-2"><span>🚆 電車 38分 / ¥920</span><span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700">難易度 4/5</span></div>
                <div className="flex items-center justify-between rounded-lg border p-2"><span>🚌 バス 45分 / ¥1,200</span><span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">難易度 2/5</span></div>
                <div className="flex items-center justify-between rounded-lg border p-2"><span>🚖 タクシー 32分 / ~¥5,200</span><span className="px-2 py-0.5 rounded bg-green-100 text-green-700">難易度 1/5</span></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
