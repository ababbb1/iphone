import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  lockButtonHandler: () => void;
}

export default function Layout({ children, lockButtonHandler }: Props) {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className="relative w-[414px] h-[896px] flex items-center">
        <img
          src="/assets/iphone-border.png"
          className="z-40 absolute object-cover top-[50%] -translate-y-[50%] pointer-events-none"
          alt="iphone-border"
        />
        <div
          onClick={lockButtonHandler}
          className="absolute top-[224px] right-0 w-[8px] h-[100px] z-50 hover:cursor-pointer"
        ></div>
        <main className="absolute w-full h-[824.8px] px-[27px] py-[24px]">
          <div className="w-full h-full rounded-md overflow-hidden">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
