import Head from 'next/head';
import Home from 'src/views/Home';
import { Top } from 'src/Images';

export default function Index() {
  return (
    <>
      <Head>
        <meta key="viewport" name="viewport" content="height=device-height, width=device-width, initial-scale=1, minimum-scale=1" />
        <title key="title">BAUES</title>
        <meta
          key="description"
          name="description"
          content="みんなの反応で進化する建築ソーシャルメディアBAUES（バウエス）。ニュース、イベント、論考、作品等、あらゆる建築情報が集まり、つながり、発展していきます。建築を、みんなの考えを、自分の想いを。もっと知って、もっと遠くに届けよう。"
        />
        <meta key="og:title" property="og:title" content="BAUES" />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:site_name" property="og:site_name" content="BAUES" />
        <meta
          key="og:description"
          property="og:description"
          content="みんなの反応で進化する建築ソーシャルメディアBAUES（バウエス）。ニュース、イベント、論考、作品等、あらゆる建築情報が集まり、つながり、発展していきます。建築を、みんなの考えを、自分の想いを。もっと知って、もっと遠くに届けよう。"
        />
        <meta key="og:image" property="og:image" content={Top} />
        <meta key="og:locale" property="og:locale" content="ja_JP" />
        <meta key="fb:app_id" property="fb:app_id" content="331619160596063" />
        <meta key="fb:pages" property="fb:pages" content="130407134318451" />
        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta key="twitter:image" name="twitter:image" content={`https://baues.co.jp${Top}`} />
        <meta key="twitter:site" name="twitter:site" content="@BAUES_IO" />
        <meta key="twitter:creator" name="twitter:creator" content="@BAUES_IO" />
        <meta key="twitter:app:country" name="twitter:app:country" content="JP" />
      </Head>
      <Home />
    </>
  );
}
