import { useFileStore } from "@/store/use-file-store";
import { Preview } from "@/types/upload";
import { isImageFile, isPowerpointFile, isWordFile } from "@/utils";
import { isPdfFile } from "pdfjs-dist";
import React, { useCallback } from "react";
import { v4 as uuid } from 'uuid';

type FilePreviewProps = {
    multiple?: boolean;
    type: 'pdf' | 'image' | 'word' | 'powerpoint'
};

export const useFilePreview = ({ multiple, type }: FilePreviewProps) => {
    const { files, setFiles, setOnDrag, setErrors } = useFileStore((state) => ({
        files: state.files,
        setFiles: state.setFiles,
        setOnDrag: state.setOnDrag,
        setErrors: state.setErrors,
    }));

    const onSelectOrDropFiles = useCallback((newFiles: FileList | null) => {
        if (!newFiles) return;

        const tempErrors: string[] = [];
        const droppedFiles = Array.from(newFiles).filter((file) => {
            if (
                (type === 'pdf' && !isPdfFile(file.name)) ||
                (type === 'image' && !isImageFile(file.name)) ||
                (type === 'word' && !isWordFile(file.name)) ||
                (type === 'powerpoint' && !isPowerpointFile(file.name))
            ) {
                tempErrors.push(`Sorry, ${file.name} not allowed.`)
                return;
            }
            return true;
        }).map(file => (Object.assign(file, { preview: isWordFile(file.name) ? '/img/microsoft-word.svg' + uuid() : isPowerpointFile(file.name) ? 'img/microsoft-powerpoint.svg' + uuid() : URL.createObjectURL(file) })));

        const updatedFiles = multiple ? [...files, ...droppedFiles] : droppedFiles;

        setFiles(updatedFiles);
        setErrors(tempErrors);

    }, [files])


    const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelectOrDropFiles(event.target.files);
    }

    const deleteFile = (file: Preview) => {
        const updatedFiles = multiple ? files.filter(f => f.preview !== file.preview) : [];

        setFiles(updatedFiles);
    }

    const handleOnDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const files = event.dataTransfer.files;

        if (files.length === 0) {
            return setOnDrag(false);
        }

        onSelectOrDropFiles(files);
        setOnDrag(false);
    }

    return {
        onSelectFile, deleteFile, handleOnDrop
    }
}