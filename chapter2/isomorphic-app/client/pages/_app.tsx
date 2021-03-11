import { AppStateProvider } from '../context/state';
import PageContainer from '../components/PageContainer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </AppStateProvider>
  );
}

export default MyApp;
