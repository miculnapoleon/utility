import { Provider } from "react-redux";

import Layout from '../components/layout/Layout'
import Menu from '../components/menu/Menu'
import configStore from "../store/index";

const store = configStore();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        {/* <Menu /> */}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp
