import Hero from '@/components/merge-pdf/Hero';
import DragFileOverlay from '@/components/uploads/DragFileOverlay';
import FileInput from '@/components/uploads/FileInput';
import Wrapper from '@/components/Wrapper';
import { services } from '@/constants';
import AppLayout from '@/layouts/AppLayout';

const MergePdf = () => {
    function handleOnSelectFile() {}

    return (
        <AppLayout title="Złącz pliki PDF">
            <Wrapper>
                <Hero
                    title="Złącz pliki PDF"
                    description={services[0].description}
                    btn={{
                        title: 'Wybierz pliki PDF',
                        className:
                            'bg-sky-500 text-white hover:bg-sky-600 transition-all shadow focus:ring-4 focus:ring-blue/15',
                    }}
                    dropLabel="albo upuść pliki tutaj"
                />
                <FileInput
                    onSelectFile={handleOnSelectFile}
                    multiple={true}
                    accept="application/pdf"
                />

                <DragFileOverlay onDrag={true} />
            </Wrapper>
        </AppLayout>
    );
};

export default MergePdf;
