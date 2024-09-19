import { v4 as uuid } from 'uuid';
import { useForm } from '@inertiajs/react';
import { useShallow } from 'zustand/react/shallow';

import { useFilePreview } from '@/hooks/use-file-preview';
import { useFileStore } from '@/store/use-file-store';
import { Upload } from '@/types/upload';
import { services } from '@/constants';

import Hero from '@/components/merge-pdf/Hero';
import DragFileOverlay from '@/components/uploads/DragFileOverlay';
import FileInput from '@/components/uploads/FileInput';
import Wrapper from '@/components/Wrapper';
import AppLayout from '@/layouts/AppLayout';
import { useEffect } from 'react';

const MergePdf = () => {
    const { data, setData, post, processing } = useForm<Upload>({
        files: null,
        token: uuid(),
    });

    const { files, onDrag, setOnDrag } = useFileStore(
        useShallow((state) => ({
            files: state.files,
            onDrag: state.onDrag,
            setOnDrag: state.setOnDrag,
        }))
    );

    const { onSelectFile, handleOnDrop } = useFilePreview({
        multiple: true,
        type: 'pdf',
    });

    useEffect(() => {
        setData('files', files);
    }, [files]);

    return (
        <AppLayout title="Złącz pliki PDF">
            <Wrapper
                tabIndex={0}
                onDragEnter={() => setOnDrag(true)}
                onDragExit={() => setOnDrag(false)}
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleOnDrop}
            >
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
                    onSelectFile={onSelectFile}
                    multiple={true}
                    accept="application/pdf"
                />

                <DragFileOverlay onDrag={onDrag} />
            </Wrapper>
        </AppLayout>
    );
};

export default MergePdf;
