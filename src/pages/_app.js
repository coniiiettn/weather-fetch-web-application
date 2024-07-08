
// App.js
import React from 'react';
import { RecentlyViewedProvider } from '../context/recentlyView'; 
import "@/styles/globals.css";
import Layout from '../components/Layout'; 

export default function App({ Component, pageProps }) {
  return (
    <RecentlyViewedProvider>
      <Layout><Component {...pageProps} />
      </Layout>
    </RecentlyViewedProvider>
  );
}
