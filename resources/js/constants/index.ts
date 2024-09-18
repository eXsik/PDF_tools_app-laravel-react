export type Service = {
    title: string;
    description: string;
    imageUrl: string;
    href: string;
    premium?: boolean;
};

export const services: Service[] = [
    {
        title: 'Złącz PDF',
        description:
            'Combine PDFs in the order you want with the easiest PDF merger available.',
        imageUrl: '/img/merge-pdf.svg',
        href: route('merge_pdf'),
    },
    {
        title: 'Rozdziel PDF',
        description:
            'Seperate one page or a whole set for easy conversion into independent PDF files.',
        imageUrl: '/img/split-pdf.svg',
        href: route('split_pdf'),
    },
    {
        title: 'PDF do JPG',
        description:
            'Convert each page of PDF into JPG image.',
        imageUrl: '/img/pdf-to-jpg.svg',
        href: route('pdf_to_jpg'),
    },
    {
        title: 'JPG do PDF',
        description:
            'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.',
        imageUrl: '/img/jpg-to-pdf.svg',
        href: route('jpg_to_pdf'),
    },
    {
        title: 'Obróć PDF',
        description:
            'Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once.',
        imageUrl: '/img/rotate-pdf.svg',
        href: route('rotate_pdf'),
    },
    {
        title: 'Kompresuj PDF',
        description:
            'Reduce file size while optimizing for maximal PDF quality.',
        imageUrl: '/img/compress-pdf.svg',
        href: route('compress_pdf'),
        premium: true
    },
    {
        title: 'Word do PDF',
        description:
            'Make DOC and DOCX files easy to read by converting them to PDF.',
        imageUrl: '/img/word-to-pdf.svg',
        href: route('word_to_pdf'),
        premium: true
    }, {
        title: 'Powerpoint do PDF',
        description:
            'Make PPT and PPTX slideshows to view by converting them to PDF.',
        imageUrl: '/img/powerpoint-to-pdf.svg',
        href: route('powerpoint_to_pdf'),
        premium: true
    },
];