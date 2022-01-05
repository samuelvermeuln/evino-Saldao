import Head from 'next/head';

import { useThemeContext } from '../provider/Theme';


export default function MyHead({title}) {

  const { theme } = useThemeContext();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link id="theme-css" rel="stylesheet" type="text/css" href={theme.theme} />
      <link id="layout-css" rel="stylesheet" type="text/css" href={theme.layout} />
      
      {/* <link id="layout-css" rel="stylesheet" type="text/css" href='primereact/resources/primereact.min.css' />
      <link id="layout-css" rel="stylesheet" type="text/css" href='primeicons/primeicons.css' />
      <link id="layout-css" rel="stylesheet" type="text/css" href='primeflex/primeflex.css' /> */}

D
      <link id="layout-css" rel="stylesheet" type="text/css" href='./styles/login.modules.scss' />
      <link id="layout-css" rel="stylesheet" type="text/css" href='./styles/table.modules.scss' />
      <link id="layout-css" rel="stylesheet" type="text/css" href='./styles/checkout.modules.scss' />
      <link id="layout-css" rel="stylesheet" type="text/css" href='./styles/ataViewDemo.css' />


      <link id="layout-css" rel="stylesheet" type="text/css" href='./styles/custom.scss' />
      <link id="layout-css" rel="stylesheet" type="text/css" href='~react-pro-sidebar/dist/scss/styles.scss' />

      {/* <link id="layout-css" rel="stylesheet" type="text/css" href='primereact/resources/primereact.min.css' />
      <link id="layout-css" rel="stylesheet" type="text/css" href='primeicons/primeicons.css' />
      <link id="layout-css" rel="stylesheet" type="text/css" href='primeflex/primeflex.css' /> */}

    </Head>
  )
}