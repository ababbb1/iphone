import { MouseEventHandler, PropsWithChildren } from "react";
import BatteryIcon from "../svg/battery-icon";

interface Props extends PropsWithChildren {
  bottomBarMouseDownHandler: MouseEventHandler;
}

export default function AppLayout({
  children,
  bottomBarMouseDownHandler,
}: Props) {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-0 w-full h-[20px] flex justify-between">
        <div></div>
        <div className="flex">
          <BatteryIcon />
        </div>
      </div>
      <div className="w-full h-full pt-[20px]">{children}</div>

      <div
        onMouseDown={bottomBarMouseDownHandler}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130px] h-[21px] flex items-center hover:cursor-pointer disable-dragging"
      >
        <div className="w-full h-[5px] rounded-full bg-white"></div>
      </div>
    </div>
  );
}
