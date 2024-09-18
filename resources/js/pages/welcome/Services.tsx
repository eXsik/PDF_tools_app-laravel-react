import Card from '@/components/Card';
import { services } from '@/constants';

export default function Services() {
    return (
        <div className="grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
                <Card
                    key={`service-${index}`}
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                    href={service.href}
                    premium={service.premium}
                />
            ))}
        </div>
    );
}
