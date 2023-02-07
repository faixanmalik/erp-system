import '@/styles/globals.css'
import FullLayout from "../../src/pannel/layouts/FullLayout";
import "../styles/style.scss";

export default function App({ Component, pageProps }) {
  return <>

  <FullLayout>
    <Component {...pageProps} />
  </FullLayout>
  
  </>
}
