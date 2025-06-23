"use client"

import { use, Suspense } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { unstable_noStore as noStore } from 'next/cache';
import { UpdateCard } from '@/components/UpdateCard'
import { useState, useEffect } from 'react'

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  authorBio: string
  authorImage: string
  date: string
  category: string
  tags: string[]
  featuredImage: string
  readTime: string
  published: boolean
  featured: boolean
  seoTitle: string
  seoDescription: string
  seoKeywords: string
}

interface UpdatesConfig {
  settings: {
    articlesPerPage: number
    showExcerpts: boolean
    showAuthor: boolean
    showDate: boolean
    showCategory: boolean
    enableComments: boolean
    featuredArticleId: string
  }
  articles: Article[]
}

async function getUpdatesData(): Promise<UpdatesConfig | null> {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'
  const apiUrl = `${apiBaseUrl}/api/updates`

  try {
    const res = await fetch(apiUrl)
    if (!res.ok) {
      throw new Error('Failed to fetch updates data')
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Failed to fetch updates data:', error)
    return null
  }
}

export async function generateStaticParams() {
  const updatesData = await getUpdatesData()
  const articles = updatesData?.articles?.filter(p => p.published) || []
  
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function UpdateArticlePage({ params }: { params: { slug: string } }) {
  const updatesData = await getUpdatesData()
  
  const article = updatesData?.articles?.find((p) => p.slug === params.slug)
  
  if (!article || !article.published) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-4">The article you're looking for doesn't exist or has been removed.</p>
            <Link href="/updates" className="text-blue-600 hover:underline">
              ← Back to Updates
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedArticles = updatesData?.articles
    ?.filter((p) => p.published && p.id !== article.id && p.category === article.category)
    ?.slice(0, 3) || []

  // Format date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return dateString;
    }
  }

  // Share functions
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = article.title
  
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
  }
  
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank')
  }
  
  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Glassmorphic Header Overlay Only */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="backdrop-blur-md bg-white/70 shadow-lg shadow-black/10 border-b border-white/30">
          <Header />
        </div>
      </div>
      {/* Spacer for fixed header */}
      <div className="h-[80px] md:h-[100px] lg:h-[112px]" />
      <article className="pt-0">
        {/* Breadcrumb (restored to original location) */}
        <div className="bg-[#FFBE00] py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-yellow-600">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/updates" className="text-gray-600 hover:text-yellow-600">Updates</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 truncate max-w-sm">{article.title}</span>
            </nav>
          </div>
        </div>
        {/* Hero Section */}
        <div className="w-full bg-black py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link 
                href="/updates" 
                className="inline-flex items-center text-[#FFBE00] hover:text-yellow-400 mb-8 transition-colors font-semibold"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Updates
              </Link>
              {/* Article Meta */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-white mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                  {updatesData?.settings.showAuthor && (
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  )}
                </div>
              </div>
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#FFBE00' }}>
                {article.title}
              </h1>
              {/* Excerpt */}
              {article.excerpt && (
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {article.excerpt}
                </p>
              )}
              {/* Featured Image */}
              {article.featuredImage ? (
                <div className="mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="mb-8 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center h-[200px]">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-yellow-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />

                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-600">Tags:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-600">Share this article:</span>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={shareOnFacebook}
                          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          title="Share on Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </button>
                        <button
                          onClick={shareOnTwitter}
                          className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                          title="Share on Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </button>
                        <button
                          onClick={shareOnLinkedIn}
                          className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                          title="Share on LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-8">
                    {/* Article Info */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-4">Article Information</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">Published: {formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">Reading time: {article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">Category: {article.category}</span>
                        </div>
                        {article.tags && article.tags.length > 0 && (
                          <div className="pt-2">
                            <span className="text-gray-600 text-xs font-medium">Tags:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {article.tags.slice(0, 3).map((tag, index) => (
                                <span
                                  key={index}
                                  className="bg-white text-gray-600 px-2 py-1 rounded text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-4">Quick Navigation</h3>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-gray-800">Quick Links</h4>
                        <ul className="space-y-2">
                          <li><Link href="/" className="block text-gray-600 hover:text-yellow-600 transition-colors">Home</Link></li>
                          <li><Link href="/about" className="block text-gray-600 hover:text-yellow-600 transition-colors">About Us</Link></li>
                          <li><Link href="/services" className="block text-gray-600 hover:text-yellow-600 transition-colors">Services</Link></li>
                          <li>
                            <Link href="/contacts" className="block text-gray-600 hover:text-yellow-600 transition-colors">
                              Contact Us
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedArticles.map((relatedArticle) => (
                    <UpdateCard
                      key={relatedArticle.id}
                      image={relatedArticle.featuredImage}
                      category={relatedArticle.category}
                      title={relatedArticle.title}
                      excerpt={relatedArticle.excerpt}
                      author={relatedArticle.author}
                      date={relatedArticle.date}
                      slug={relatedArticle.slug}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  )
} 