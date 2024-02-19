import clsx from 'clsx';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-[500px] justify-center pt-8">
      <div className="z-9 container fixed h-[500px] px-8">
        <div
          className={clsx(
            'items-top flex flex-wrap',
            'h-[700px] rounded-[10px] border border-stone-300 bg-white bg-opacity-10 p-4 backdrop-blur-2xl',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
