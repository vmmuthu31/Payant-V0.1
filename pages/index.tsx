import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState, useEffect } from "react";
import HeroSection from './Hero'
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";

const override = css``;
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="animation-box">
          <PropagateLoader
            loading={loading}
            size={30}
            color="#f7d919"
            css={override}
          />
        </div>
      ) : (
        <div className="App">
              <HeroSection />
        </div>
      )}
    </>
  );
}

export default App;