import '../styles/globals.css'
import { Provider } from "react-redux";
import configStore from "../store/index";

const store = configStore();
function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
}

export default MyApp
