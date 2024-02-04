import ThreeCity from '../../components/3D/3DCity';
import Header from '../../components/header/Header';
import Layout from './Layout';

export default function Home() {
  return (
    <ThreeCity>
      <Header />
      <Layout>Hello</Layout>
    </ThreeCity>
  );
}
