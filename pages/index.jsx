import MyHead from '../components/MyHead'

import { useState, useEffectt } from "react";

import { NovaTopBar } from '../components/NovaTopBar';
import { Homer } from '../components/Homer/Homer';

export default function Home() {

  const [isLogin, setLogin] = useState(true);


  return (
    <>
      <MyHead title="( EVINO )" />
        {/* {isLogin ? <Layout /> : <Login />} */}
        <NovaTopBar title="( EVINO ) - Saldão" />
      <Homer />
    </>
  );
}
