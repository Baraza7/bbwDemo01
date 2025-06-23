import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from 'lucide-react';

interface UpdateCardProps {
    image: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    slug: string;
}

export function UpdateCard({ image, category, title, excerpt, author, date, slug }: UpdateCardProps) {
    return (
        <Card className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out group">
            <Link href={`/updates/${slug}`} className="block">
                {image ? (
                    <div className="relative w-full h-64">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover w-full h-full"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                        />
                    </div>
                ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                    </div>
                )}
                <div className="flex-1 flex flex-col justify-between p-8">
                    <div className="mb-4">
                        <span className="text-sm font-semibold text-black bg-black/10 py-1 px-3 rounded-full">{category}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-serif mb-3 text-black group-hover:text-yellow-400">
                        <Link href={`/updates/${slug}`} className="hover:text-yellow-400 transition-colors duration-300">
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
                    <Link href={`/updates/${slug}`}>
                        <span className="inline-flex items-center mt-6 text-black group-hover:text-yellow-400 font-semibold transition-colors duration-300">
                            Read More <ArrowRight size={16} className="ml-2" />
                        </span>
                    </Link>
                </div>
            </Link>
        </Card>
    );
} 