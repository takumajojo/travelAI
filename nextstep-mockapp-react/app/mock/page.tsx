"use client";

import { useState } from "react";
import { Card, CardContent, Button } from "@/components/ui/Card";
import { Plane, Map, Clock, QrCode, Train, Ship, Bus, Car, Walk, ChevronRight } from "lucide-react";

type Mode = "arrival" | "sight" | "gap" | "luggage" | "itinerary";

function EffortBadge({ level }: { level: 1|2|3|4|5 }) {
  const colors = {
    1: "bg-green-100 text-green-700",
    2: "bg-yellow-100 text-yellow-700",
    3: "bg-amber-100 text-amber-700",
    4: "bg-orange-100 text-orange-700",
    5: "bg-red-100 text-red-700",
  } as const;
  return <span className={`px-2 py-0.5 rounded text-xs ${colors[level]}`}>難易度 {level}/5</span>;
}

export default function Mock() {
  const [mode, setMode] = useState<Mode>("arrival");
  const Tab = ({ id, label }: { id: Mode; label: string }) => (
    <button
      onClick={() => setMode(id)}
      className={`px-4 py-2 rounded-xl text-sm border ${mode===id? "bg-black text-white": "bg-white text-gray-700"}`}
    >{label}</button>
  );

  return (
    <main className="p-6 md:p-10 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">🧪 モック – 主要カードの動き</h1>
      <div className="flex flex-wrap gap-2">
        <Tab id="arrival" label="到着カード（空港→ホテル）" />
        <Tab id="sight" label="観光地カード（ホテル→スポット）" />
        <Tab id="gap" label="空き時間レコメンド（3軸）" />
        <Tab id="luggage" label="荷物：見せるだけ画面" />
        <Tab id="itinerary" label="日別タイムライン（しおり）" />
      </div>

      {mode==="arrival" && <ArrivalCard />}
      {mode==="sight" && <SightCard />}
      {mode==="gap" && <GapCard />}
      {mode==="luggage" && <LuggageCard />}
      {mode==="itinerary" && <ItineraryCard />}
    </main>
  );
}

function Row({ icon, title, sub, price, mins, effort }: any) {
  return (
    <div className="flex items-center justify-between rounded-xl border p-3 mb-2">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-gray-600">{sub}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-800">⏱ {mins}分 ・ ¥{price}</div>
        <EffortBadge level={effort} />
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
}

function ArrivalCard() {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-white">
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <div className="font-semibold">到着カード（HND → 京都ホテル）</div>
          <div className="text-xs text-gray-600">到着まで 35分</div>
        </div>
        <Row icon={<Train className="w-5 h-5" />} title="電車" sub="浜松町→品川→京都" price="920" mins={38} effort={4} />
        <Row icon={<Bus className="w-5 h-5" />} title="バス" sub="直行 / 荷物置場あり" price="1200" mins={45} effort={2} />
        <Row icon={<Car className="w-5 h-5" />} title="タクシー" sub="ドアtoドア / 家族向け" price="5200" mins={32} effort={1} />
        <div className="text-right mt-3"><Button>このルートでしおりに追加</Button></div>
      </CardContent>
    </Card>
  );
}

function SightCard() {
  return (
    <Card className="bg-gradient-to-r from-green-50 to-white">
      <CardContent>
        <div className="font-semibold mb-2">観光地カード（ホテル→清水寺）</div>
        <Row icon={<Walk className="w-5 h-5" />} title="徒歩" sub="坂道あり / 景観◎" price="0" mins={20} effort={3} />
        <Row icon={<Bus className="w-5 h-5" />} title="バス" sub="直行 / 混雑中" price="230" mins={15} effort={2} />
        <Row icon={<Car className="w-5 h-5" />} title="タクシー" sub="最短 / 子連れ◎" price="1200" mins={10} effort={1} />
        <div className="text-right mt-3"><Button>このルートでしおりに追加</Button></div>
      </CardContent>
    </Card>
  );
}

function GapCard() {
  const [tab, setTab] = useState<"eat"|"shop"|"act">("act");
  const Tab = ({ id, label }: any) => (
    <button onClick={() => setTab(id)} className={`px-4 py-2 rounded-xl text-sm border ${tab===id? "bg-black text-white":"bg-white text-gray-700"}`}>{label}</button>
  );
  return (
    <Card className="bg-gradient-to-r from-amber-50 to-white">
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">空き時間：12:00–15:00（京都駅周辺）</div>
          <Clock className="w-4 h-4 text-gray-500" />
        </div>
        <div className="flex gap-2 mb-3">
          <Tab id="eat" label="🍴 食事" />
          <Tab id="shop" label="🛍️ 買い物" />
          <Tab id="act" label="🎨 アクティビティ" />
        </div>
        {tab==="eat" && <div className="space-y-2 text-sm">
          <Row icon={<Map className="w-5 h-5" />} title="人気ラーメン店" sub="徒歩8分 / 30席 / 今なら空きあり" price="900" mins={60} effort={2} />
          <Row icon={<Map className="w-5 h-5" />} title="町家カフェ" sub="徒歩5分 / テラス席" price="1200" mins={60} effort={1} />
        </div>}
        {tab==="shop" && <div className="space-y-2 text-sm">
          <Row icon={<Map className="w-5 h-5" />} title="駅ビル伊勢丹" sub="徒歩3分 / おみやげ充実" price="0" mins={90} effort={1} />
          <Row icon={<Map className="w-5 h-5" />} title="錦市場" sub="徒歩14分 / 混雑注意" price="0" mins={90} effort={3} />
        </div>}
        {tab==="act" && <div className="space-y-2 text-sm">
          <Row icon={<Map className="w-5 h-5" />} title="茶道体験（2h）" sub="OTA横断：Klook/Viator/KKday" price="4500" mins={120} effort={2} />
          <Row icon={<Map className="w-5 h-5" />} title="着物レンタル（3h）" sub="OTA横断：Klook/GetYourGuide" price="3800" mins={180} effort={2} />
        </div>}
        <div className="text-right mt-3"><Button>おすすめをしおりに追加</Button></div>
      </CardContent>
    </Card>
  );
}

function LuggageCard() {
  return (
    <Card className="bg-gradient-to-r from-cyan-50 to-white">
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <div className="font-semibold">荷物：見せるだけ画面（ホテルフロント/コンビニ用）</div>
          <QrCode className="w-5 h-5 text-gray-500" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border p-4 space-y-2">
            <div className="text-sm text-gray-700">FROM: Tokyo Hotel 🏨</div>
            <div className="text-sm text-gray-700">TO: Kyoto Hotel 🏨</div>
            <div className="text-sm">到着予定：明日10:00まで</div>
            <div className="h-32 rounded-lg border grid place-content-center text-gray-400">QR CODE</div>
            <div className="text-xs text-gray-600">スタッフの方へ：このQRを読み取り、荷物ラベルに予約IDを記載してください。</div>
          </div>
          <div className="rounded-xl border p-4 space-y-2">
            <div className="text-sm font-medium">多言語切替</div>
            <div className="flex gap-2 flex-wrap text-sm">
              <span className="px-2 py-1 rounded bg-black text-white">EN</span>
              <span className="px-2 py-1 rounded bg-gray-200">日本語</span>
              <span className="px-2 py-1 rounded bg-gray-200">繁體中文</span>
              <span className="px-2 py-1 rounded bg-gray-200">简体中文</span>
              <span className="px-2 py-1 rounded bg-gray-200">한국어</span>
            </div>
            <div className="text-sm text-gray-700 mt-2">受け渡し場所：ホテルフロント / コンビニ（取扱可店舗）</div>
            <div className="text-sm text-gray-700">料金目安：¥2,000〜 / 個（翌日午前着）</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ItineraryCard() {
  const items = [
    { time: "09:00", title: "東京→京都（新幹線）", note: "のぞみ / 2h10m" },
    { time: "11:20", title: "京都駅→ホテル", note: "タクシー / 20m" },
    { time: "12:00-15:00", title: "空き時間", note: "ランチ / 買い物 / 体験" },
    { time: "15:00", title: "チェックイン", note: "ホテル" },
    { time: "17:30", title: "清水寺", note: "ホテル→清水寺（バス15m）" },
  ];
  return (
    <Card className="bg-gradient-to-r from-violet-50 to-white">
      <CardContent>
        <div className="font-semibold mb-2">しおり（日別タイムライン）</div>
        <div className="space-y-2">
          {items.map((it, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border p-3">
              <div className="w-24 text-sm text-gray-600">{it.time}</div>
              <div className="flex-1">
                <div className="font-medium">{it.title}</div>
                <div className="text-xs text-gray-600">{it.note}</div>
              </div>
              <Button className="px-3 py-2 text-xs">編集</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
