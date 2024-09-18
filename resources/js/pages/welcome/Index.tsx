import Wrapper from '@/components/Wrapper';
import AppLayout from '@/layouts/AppLayout';
import Hero from './Hero';
import Services from './Services';

const Index = () => {
    return (
        <AppLayout title="Narzędzia do edycji PDF online" footer={true}>
            <Wrapper className="max-w-screen-xl sm:py-8">
                <Hero />
                <Services />
            </Wrapper>
        </AppLayout>
    );
};

export default Index;
