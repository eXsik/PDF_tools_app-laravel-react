import { Transition } from '@headlessui/react';
import clsx from 'clsx';

type DragFileOverlayProps = {
    onDrag: boolean;
};

export default function DragFileOverlay({ onDrag }: DragFileOverlayProps) {
    return (
        onDrag && (
            <Transition
                show={onDrag}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-10"
                leave-to="opacity-100"
            >
                <div className="relative">
                    <div className="fixed inset-x-0 bottom-0 top-16 z-10 flex items-center justify-center bg-secondary/80 text-2xl text-slate-400/50 sm:text-3xl">
                        <p
                            className={clsx(
                                '-mt-[52px] rounded-lg bg-secondary px-4 py-2'
                            )}
                        >
                            Drag file here
                        </p>
                    </div>
                </div>
            </Transition>
        )
    );
}
