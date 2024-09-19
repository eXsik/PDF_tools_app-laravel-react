export const isImageFile = (name: string | null) => {
    if (!name) return;

    const validExtensions = ['jpg', 'png', 'jpeg', 'webp'];
    const extensions = name.split('.').pop()?.toLowerCase() ?? '';

    return validExtensions.includes(extensions);
}

export const isWordFile = (name: string | null) => {
    if (!name) return;

    const validExtensions = ['doc', 'docx'];
    const extensions = name.split('.').pop()?.toLowerCase() ?? '';

    return validExtensions.includes(extensions);

}

export const isPowerpointFile = (name: string | null) => {
    if (!name) return;

    const validExtensions = ['ppt', 'pptx'];
    const extensions = name.split('.').pop()?.toLowerCase() ?? '';

    return validExtensions.includes(extensions);
}