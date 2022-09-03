import "../styles/globals.css";
import "../configureAmplify";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
