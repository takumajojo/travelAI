import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto p-10 text-center space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Next Step Travel</h1>
      <p className="text-gray-600">提案資料（スライド）とクリックできるモックを用意しました。</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Link href="/slides" className="px-6 py-3 rounded-2xl bg-blue-600 text-white">📑 スライドを見る</Link>
        <Link href="/mock" className="px-6 py-3 rounded-2xl bg-green-600 text-white">🧪 モックを触る</Link>
      </div>
    </main>
  );
}
