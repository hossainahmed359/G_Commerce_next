import "../styles/globals.css";
/* import "../styles/Custom/style.css"; */
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// Font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// Assets
import "/styles/assets/css/font-techmarket.css";
/* import "/styles/assets/css/slick.css"; */
/* import "/styles/assets/css/techmarket-font-awesome.css"; */
/* import "/styles/assets/css/slick-style.css"; */
/* import "/styles/assets/css/animate.min.css"; */
import "/styles/assets/css/style.css";
// import "/styles/assets/css/colors/blue.css";
import "/styles/assets/css/colors/orange.css";



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
