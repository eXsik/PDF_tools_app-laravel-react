import { Service } from '@/constants';
import { Link } from '@inertiajs/react';

const Card = ({ title, description, imageUrl, href, premium }: Service) => {
    return (
        <Link
            href={href}
            className="relative flex flex-col gap-2 rounded-lg border-2 border-transparent bg-white p-4 text-center shadow outline-none transition-all hover:scale-105 hover:border-red-500 focus:scale-105 focus:border-red-500 lg:max-w-xs"
        >
            <div className="mx-auto">
                <img src={imageUrl} alt={title} />
            </div>
            <h5 className="text-xl font-semibold">{title}</h5>
            <p className="text-sm text-slate-600">{description}</p>

            {premium && (
                <span className="absolute right-4 top-4 rounded-lg border border-red-500 px-2 py-1 text-xs font-semibold leading-3 text-red-500">
                    Upgrade
                </span>
            )}
        </Link>
    );
};

export default Card;
