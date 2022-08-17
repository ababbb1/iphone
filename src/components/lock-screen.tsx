import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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

  const handleSweepUpBottomBar: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (screenRef.current) {
        const a =
          e.pageY - (window.innerHeight - screenRef.current.offsetHeight) / 2;

        screenRef.current.style.top = `-${
          screenRef.current.offsetHeight - a - 8
        }px`;

        setBackdropBlurAmount(
          Math.min((screenRef.current.offsetHeight - a) / 24, 12)
        );
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
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
        className={`w-full h-full absolute top-0 left-0 bg-default-image bg-cover transition-opacity duration-500 ${
          isScreenOn ? "opacity-100" : "opacity-0"
        }`}
      >
        {isScreenOn && (
          <div
            ref={screenRef}
            className={`absolute top-0 left-0 w-full h-full ${
              isMouseDownBottomBar ? `shadow-xl` : ""
            }`}
            style={{
              backdropFilter: isMouseDownBottomBar
                ? `blur(${backdropBlurAmount}px)`
                : "",
            }}
          >
            <AppLayout bottomBarMouseDownHandler={handleMouseDownBottomBar}>
              lockscreen
            </AppLayout>
          </div>
        )}
      </div>
    </>
  );
}
