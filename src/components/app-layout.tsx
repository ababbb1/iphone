import {
  EventHandler,
  MouseEventHandler,
  PropsWithChildren,
  TouchEventHandler,
} from "react";
import BatteryIcon from "../svg/battery-icon";
import SignalIcon from "../svg/signal-icon";
import WifiIcon from "../svg/wifi-icon";

interface Props extends PropsWithChildren {
  bottomBarMouseDownHandler: MouseEventHandler | TouchEventHandler;
}

export default function AppLayout({
  children,
  bottomBarMouseDownHandler,
}: Props) {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-0 w-full h-[30px] flex justify-between px-[12px]">
        <div className="text-white text-[14px] flex items-end w-[68px] justify-center">
          <span className="leading-[10px]">iphone</span>
        </div>
        <div className="flex text-white items-end gap-[6px] w-[68px] justify-center">
          <SignalIcon className="h-[10px]" />
          <WifiIcon className="h-[10px]" />
          <BatteryIcon className="h-[10px]" />
        </div>
      </div>
      <div className="w-full h-full pt-[30px]">{children}</div>

      <div
        onMouseDown={bottomBarMouseDownHandler as MouseEventHandler}
        onTouchStart={bottomBarMouseDownHandler as TouchEventHandler}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130px] h-[21px] flex items-center hover:cursor-pointer disable-dragging"
      >
        <div className="w-full h-[5px] rounded-full bg-white"></div>
      </div>
    </div>
  );
}
