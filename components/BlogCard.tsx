import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

interface BlogCardProps {
    image: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    slug: string;
}

export const BlogCard = ({ image, category, title, excerpt, author, date, slug }: BlogCardProps) => {
    return (
        <div className="bg-yellow-400 rounded-lg overflow-hidden group transition-all duration-300 hover:bg-white">
            <Link href={`/media/${slug}`} className="block">
                <div className="relative h-56">
                    <Image 
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
            </Link>
            <div className="p-6">
                <div className="mb-4">
                    <span className="text-sm font-semibold text-black bg-black/10 py-1 px-3 rounded-full">{category}</span>
                </div>
                <h3 className="text-2xl font-bold font-serif mb-3 text-black group-hover:text-yellow-400">
                    <Link href={`/media/${slug}`} className="hover:text-yellow-400 transition-colors duration-300">
                        {title}
                    </Link>
                </h3>
                <p className="text-gray-800 group-hover:text-black mb-4 h-24 overflow-hidden">
                    {excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-700 group-hover:text-black">
                    <div className="flex items-center">
                        <User size={16} className="mr-2"/>
                        <span>{author}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar size={16} className="mr-2"/>
                        <span>{date}</span>
                    </div>
                </div>
                 <Link href={`/media/${slug}`}>
                    <span className="inline-flex items-center mt-6 text-black group-hover:text-yellow-400 font-semibold transition-colors duration-300">
                        Read More <ArrowRight size={16} className="ml-2" />
                    </span>
                </Link>
            </div>
        </div>
    );
}; 