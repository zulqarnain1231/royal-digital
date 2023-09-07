"use client";
import { CountDown } from "@/utils/CountDown";
import React, { useEffect, useState, useRef } from "react";

interface props {
    date: string
}

const Timer = ({date}: props) => {
    const [timeLeft, setTimeLeft] = useState(CountDown(date));
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(CountDown(date));
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="w-full flex items-center justify-center z-10">
            <div className="flex items-center justify-center gap-3 mx-auto bg-white-main rounded-full  sm:p-4 p-[8px] shadow-sm">
                <div className="sm:h-[80px] h-[60px] sm:w-[80px] w-[60px] flex flex-col items-center justify-center gap-[2px] rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary">
                    <p className="text-white-main text-xl sm:text-2xl font-semibold">
                        {timeLeft.days}
                    </p>
                    <p className="font-semibold text-white-main sm:text-xs text-[10px]">
                        Days
                    </p>
                </div>

                <div className="sm:h-[80px] h-[60px] sm:w-[80px] w-[60px] flex flex-col items-center justify-center gap-[2px] rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary">
                    <p className="text-white-main text-xl sm:text-2xl font-semibold">
                        {timeLeft.hours}
                    </p>
                    <p className="font-semibold text-white-main sm:text-xs text-[10px]">
                        Hours
                    </p>
                </div>

                <div className="sm:h-[80px] h-[60px] sm:w-[80px] w-[60px] flex flex-col items-center justify-center gap-[2px] rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary">
                    <p className="text-white-main text-xl sm:text-2xl font-semibold">
                        {timeLeft.minutes}
                    </p>
                    <p className="font-semibold text-white-main sm:text-xs text-[10px]">
                        Minutes
                    </p>
                </div>
                <div className="sm:h-[80px] h-[60px] sm:w-[80px] w-[60px] flex flex-col items-center justify-center gap-[2px] rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary">
                    <p className="text-white-main text-xl sm:text-2xl font-semibold">
                        {timeLeft.seconds}
                    </p>
                    <p className="font-semibold text-white-main sm:text-xs text-[10px]">
                        Seconds
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Timer;