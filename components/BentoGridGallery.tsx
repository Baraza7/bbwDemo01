const GalleryItem = ({ className, children }: { className: string, children: React.ReactNode }) => (
    <div 
        className={`${className} bg-gray-200 rounded-2xl flex items-center justify-center group relative overflow-hidden transition-all duration-300 hover:bg-gray-300`}
    >
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="text-gray-500 font-bold text-lg z-10">{children}</span>
    </div>
);

const BentoGridGallery = () => {
    return (
        <div className="grid md:grid-cols-4 auto-rows-[250px] gap-6 w-full">
            <GalleryItem className="md:col-span-2 md:row-span-2">Image 1</GalleryItem>
            <GalleryItem className="md:col-span-1 md:row-span-1">Image 2</GalleryItem>
            <GalleryItem className="md:col-span-1 md:row-span-1">Image 3</GalleryItem>
            <GalleryItem className="md:col-span-2 md:row-span-1">Image 4</GalleryItem>
            <GalleryItem className="md:col-span-1 md:row-span-1">Image 5</GalleryItem>
            <GalleryItem className="md:col-span-1 md:row-span-1">Image 6</GalleryItem>
            <GalleryItem className="md:col-span-2 md:row-span-1">Image 7</GalleryItem>
            <GalleryItem className="md:col-span-2 md:row-span-1">Image 8</GalleryItem>
        </div>
    );
};

export default BentoGridGallery; 