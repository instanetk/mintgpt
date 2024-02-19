import ThreeCity from '../../components/3D/3DCity';
import Header from '../../components/header/Header';
import Layout from './Layout';

type TextHeaderProps = {
  children: React.ReactNode;
};

export function TextHeader({ children }: TextHeaderProps) {
  return <h1 className="font-bebas text-3xl">{children}</h1>;
}

type TitleProps = {
  text: string;
};

export function Title({ text }: TitleProps) {
  return (
    <span className="h-8 w-full">
      <TextHeader>{text}</TextHeader>
    </span>
  );
}

type ContentWrapperProps = {
  children: React.ReactNode;
};

function ContentWrapper({ children }: ContentWrapperProps) {
  return <div className="flex h-5/6 w-full">{children}</div>;
}

function DallePrompt() {
  return (
    <div className="flex w-1/2 flex-col p-4">
      <form>
        <label htmlFor="prompt">
          <div id="image-rendering">Image Preview</div>
        </label>
        <span className="">
          <textarea
            id="prompt"
            name="prompt"
            rows={3}
            className="w-full rounded-lg border border-2 border-solid border-white bg-transparent backdrop-blur-2xl focus:border-pink-500 focus:outline-none"
          />
        </span>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <ThreeCity>
      <Header />
      <Layout>
        <Title text="Prompt and mint an NFT collection — own your art." />
        <ContentWrapper>
          <DallePrompt />
        </ContentWrapper>
      </Layout>
    </ThreeCity>
  );
}
