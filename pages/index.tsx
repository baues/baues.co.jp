import Head from 'next/head';
import { useRouter } from 'next/router';
import Home from 'src/views/Home';
import { Top } from 'src/Images';
import { useI18n } from 'src/i18n';
import { HOST, SITE_NAME, THEME_COLOR, FB_APP_ID, FB_PAGE_ID, TWITTER_ID } from 'src/constants';

export default function Index() {
  const { t } = useI18n();
  const { locale } = useRouter();
  const path = locale === 'ja' ? '' : '/en';

  return (
    <>
      <Head>
        <meta key="viewport" name="viewport" content="height=device-height, width=device-width, initial-scale=1, minimum-scale=1" />
        <meta key="application-name" name="application-name" content={SITE_NAME} />
        <meta key="theme-color" name="theme-color" content={THEME_COLOR} />
        <link key="icon" rel="icon" href="/favicon.ico" />
        <link key="manifest" rel="manifest" href="/manifest.json" />
        <title key="title">{t('title')}</title>
        <meta key="description" name="description" content={t('description')} />
        <meta key="og:title" property="og:title" content={t('title')} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
        <meta key="og:description" property="og:description" content={t('description')} />
        <meta key="og:image" property="og:image" content={Top} />
        <meta key="og:locale" property="og:locale" content={locale} />
        <meta key="fb:app_id" property="fb:app_id" content={FB_APP_ID} />
        <meta key="fb:pages" property="fb:pages" content={FB_PAGE_ID} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:image" name="twitter:image" content={`${HOST}${Top}`} />
        <meta key="twitter:site" name="twitter:site" content={TWITTER_ID} />
        <meta key="twitter:creator" name="twitter:creator" content={TWITTER_ID} />
        <meta key="twitter:app:country" name="twitter:app:country" content="JP" />
        <link key="canonical" rel="canonical" href={`${HOST}${path}`} />
      </Head>
      <Home />
    </>
  );
}
