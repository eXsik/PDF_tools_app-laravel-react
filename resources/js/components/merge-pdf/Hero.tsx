import clsx from 'clsx';
import React from 'react';

type HeroProps = {
    title: string;
    description: string;
    btn: {
        title: string;
        className: string;
    };
    dropLabel: string;
};

export default function Hero({
    title,
    description,
    btn,
    dropLabel,
}: HeroProps) {
    return (
        <div className="mx-auto my-8 max-w-4xl space-y-4 text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-2xl text-slate-600">{description}</p>

            <div className="!my-8">
                <label
                    htmlFor="files"
                    className={clsx(
                        'mx-auto block w-full max-w-xs cursor-pointer rounded-xl py-4 text-xl shadow',
                        btn.className
                    )}
                >
                    {btn.title}
                </label>
                <p className="mt-2 text-slate-500">{dropLabel}</p>
            </div>
        </div>
    );
}
