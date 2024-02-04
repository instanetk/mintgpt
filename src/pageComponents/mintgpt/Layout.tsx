import clsx from 'clsx';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-[120px] justify-center pt-8">
      <div className="z-9 container fixed h-[72px] px-8">
        <div
          className={clsx(
            'flex flex-1 flex-grow items-center justify-between',
            'rounded-[50px] border border-stone-300 bg-white bg-opacity-10 p-4 backdrop-blur-2xl',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
