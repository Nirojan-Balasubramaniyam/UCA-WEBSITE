import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <SinglePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
