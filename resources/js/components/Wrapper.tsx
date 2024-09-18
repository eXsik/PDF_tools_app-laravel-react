import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = ({
    children,
    className,
    ...rest
}: PropsWithChildren<WrapperProps>) => {
    return (
        <section
            className={clsx(
                'min-h-[calc(100vh_-_128px) relative mx-auto mt-16 flex w-full flex-col gap-8 p-4 text-slate-700 sm:gap-12',
                className
            )}
            {...rest}
        >
            {children}
        </section>
    );
};

export default Wrapper;
