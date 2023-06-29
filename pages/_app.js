import '../public/css/bootstrap.min.css';
import '../public/css/icofont.min.css';
import '../public/css/animate.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import { Provider } from 'react-redux';
import { Preloader, Placeholder } from 'react-preloading-screen';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import Head from 'next/head';
import Loader from '../components/shared/Loader';
import GoTop from '../components/shared/GoTop';

export default withRedux(initStore)(
    class MyApp extends App {
        render () {
            const { Component, pageProps, store } = this.props

            return (
                <>
                    <Head>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <title>Fleja | React Next Responsive Multi-Concept Template</title>
                    </Head>

                    <Preloader>
                        <Provider store={store}>
                            <Component {...pageProps} />
                        </Provider>

                        <GoTop scrollStepInPx="50" delayInMs="16.66" />

                        <Placeholder>
                            <Loader />
                        </Placeholder>
                    </Preloader>
                </>
            );
        }
    }
)