import {
  EventHandler,
  MouseEvent,
  MouseEventHandler,
  TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getItemsFromDateObject } from "../libs/utils";
import LockIcon from "../svg/lock-icon";
import LockIcon2 from "../svg/lock-icon2";
import AppLayout from "./app-layout";

interface Props {
  isScreenOn: boolean;
}

export default function LockScreen({ isScreenOn }: Props) {
  const [isMouseDownBottomBar, setIsMouseDownBottomBar] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const [backdropBlurAmount, setBackdropBlurAmount] = useState(0);

  const handleMouseDownBottomBar = useCallback(() => {
    setIsMouseDownBottomBar(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsMouseDownBottomBar(false);
    setBackdropBlurAmount(0);
    if (screenRef.current) {
      screenRef.current.style.transition = "top 0.3s";
      screenRef.current.style.top = "0px";
      setTimeout(() => {
        if (screenRef.current) {
          screenRef.current.style.transition = "";
        }
      }, 300);
    }
  }, []);

  const handleSweepUpBottomBar = useCallback((e: any) => {
    const pageY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
    if (screenRef.current) {
      const a =
        pageY -
        (document.body.clientHeight - screenRef.current.offsetHeight) / 2;

      screenRef.current.style.top = `-${
        screenRef.current.offsetHeight - a - 8
      }px`;

      setBackdropBlurAmount(
        Math.min((screenRef.current.offsetHeight - a) / 24, 12)
      );
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-full absolute top-0 left-0 bg-black transition-opacity duration-500 ${
          !isScreenOn ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        onMouseMove={
          isMouseDownBottomBar ? handleSweepUpBottomBar : () => undefined
        }
        onTouchMove={
          isMouseDownBottomBar ? handleSweepUpBottomBar : () => undefined
        }
        className={`w-full h-full absolute top-0 left-0 bg-default-image bg-cover transition-opacity duration-500 ${
          isScreenOn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          ref={screenRef}
          className={`absolute top-0 left-0 w-full h-full ${
            isMouseDownBottomBar ? `shadow-xl` : ""
          } ${!isScreenOn && "-z-10"}`}
          style={{
            content: "",
            backdropFilter: isMouseDownBottomBar
              ? `blur(${backdropBlurAmount}px)`
              : "",
          }}
        >
          <AppLayout bottomBarMouseDownHandler={handleMouseDownBottomBar}>
            <div className="w-full h-full flex py-[26px]">
              <div className="w-full flex flex-col items-center gap-[24px]">
                <div className="flex flex-col">
                  <div
                    className="w-[32px] flex justify-center"
                    style={
                      isScreenOn
                        ? {
                            transform: "rotateY(-180deg) translateX(-13px)",
                            transformStyle: "preserve-3d",
                            transition: "all .3s .5s",
                          }
                        : {}
                    }
                  >
                    <LockIcon2 className="w-[16px] h-[16px] text-white" />
                  </div>
                  <div className="w-[32px] flex justify-center">
                    <LockIcon className="w-[24px] h-[24px] text-white -mt-[4px]" />
                  </div>
                </div>
                <div className="flex flex-col items-center text-white gap-[12px]">
                  <div className="flex">
                    <span className="text-[80px] font-[300] leading-[60px]">
                      {getItemsFromDateObject(new Date()).hours}
                    </span>
                    <span className="text-[80px] font-[300] leading-[60px] -translate-y-[9px]">
                      :
                    </span>
                    <span className="text-[80px] font-[300] leading-[60px]">
                      {getItemsFromDateObject(new Date()).minutesWithZero}
                    </span>
                  </div>
                  <span className="tracking-wide text-[20px]">
                    {`${getItemsFromDateObject(new Date()).month}월 ${
                      getItemsFromDateObject(new Date()).date
                    }일 ${getItemsFromDateObject(new Date()).weekdayKor}요일`}
                  </span>
                </div>
              </div>
            </div>
          </AppLayout>
        </div>
      </div>
    </>
  );
}
