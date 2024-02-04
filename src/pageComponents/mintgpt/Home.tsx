import ThreeCity from '../../components/3D/3DCity';
import Header from '../../components/header/Header';
import Layout from './Layout';

export default function Home() {
  return (
    <ThreeCity>
      <Header />
      <Layout>
        <h1 className="font-bebas text-3xl">
          Seamlessly prompt and mint your NFT collections. It&apos;s time to truly own your art.
        </h1>
      </Layout>
    </ThreeCity>
  );
}
