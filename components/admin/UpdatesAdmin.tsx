"use client"

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit, Eye, Save, X, FileText, Calendar, User, Tag, Image as ImageIcon } from 'lucide-react';
import FloatingAdminNav from './FloatingAdminNav';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

// Define the structure of an article
interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    authorBio: string;
    authorImage: string;
    date: string;
    category: string;
    tags: string[];
    featuredImage: string;
    readTime: string;
    published: boolean;
    featured: boolean;
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
}

// Define the structure of the updates config
interface UpdatesConfig {
    settings: {
        articlesPerPage: number;
        showExcerpts: boolean;
        showAuthor: boolean;
        showDate: boolean;
        showCategory: boolean;
        enableComments: boolean;
        featuredArticleId: string;
    };
    articles: Article[];
}

const UPDATES_DOC_ID = 'main';

const UpdatesAdmin = () => {
    const [config, setConfig] = useState<UpdatesConfig | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [editingArticle, setEditingArticle] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchConfig = async () => {
            if (!db) return;
            setLoading(true);
            const docRef = doc(db, 'updatesConfig', UPDATES_DOC_ID);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setConfig(docSnap.data() as UpdatesConfig);
            } else {
                // Initialize with default config if not found
                setConfig({
                    settings: {
                        articlesPerPage: 10,
                        showExcerpts: true,
                        showAuthor: true,
                        showDate: true,
                        showCategory: true,
                        enableComments: false,
                        featuredArticleId: '',
                    },
                    articles: [],
                });
            }
            setLoading(false);
        };
        fetchConfig();
    }, []);

    const handleSave = async () => {
        if (!db || !config) return;
        setSaving(true);
        const docRef = doc(db, 'updatesConfig', UPDATES_DOC_ID);
        await setDoc(docRef, config, { merge: true });
        setSaving(false);
        alert('Updates configuration saved!');
    };

    const handleAddArticle = () => {
        if (!config) return;
        const newArticle: Article = {
            id: `article_${Date.now()}`,
            title: 'New Article',
            slug: 'new-article',
            excerpt: '',
            content: '',
            author: 'Admin',
            authorBio: '',
            authorImage: '',
            date: new Date().toISOString().split('T')[0],
            category: 'General',
            tags: [],
            featuredImage: '',
            readTime: '5 min',
            published: false,
            featured: false,
            seoTitle: '',
            seoDescription: '',
            seoKeywords: '',
        };
        setConfig({ ...config, articles: [...config.articles, newArticle] });
    };

    const handleArticleChange = (index: number, field: keyof Article, value: any) => {
        if (!config) return;
        const newArticles = [...config.articles];
        (newArticles[index] as any)[field] = value;
        setConfig({ ...config, articles: newArticles });
    };

    const handleDeleteArticle = (index: number) => {
        if (!config) return;
        const newArticles = config.articles.filter((_, i) => i !== index);
        setConfig({ ...config, articles: newArticles });
    };

    // Generate slug from title
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim('-');
    };

    // Edit article
    const editArticle = (article) => {
        setEditingArticle({ ...article });
        setShowForm(true);
    };

    // Delete article
    const deleteArticle = async (articleId) => {
        const articleToDelete = config?.articles.find(a => a.id === articleId);
        const articleTitle = articleToDelete?.title || 'this article';
        
        if (confirm(`Are you sure you want to delete "${articleTitle}"? This action cannot be undone.`)) {
            setDeletingId(articleId);
            setError('');
            
            try {
                // Update the config state
                const updatedConfig = {
                    ...config,
                    articles: config.articles.filter(article => article.id !== articleId)
                };
                
                setConfig(updatedConfig);

                // Auto-save to database
                const res = await fetch('/api/updates', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedConfig),
                });
                
                if (!res.ok) throw new Error('Failed to delete article');
                
                setSuccess(`Article "${articleTitle}" deleted successfully!`);
                setTimeout(() => setSuccess(''), 3000);
            } catch (err) {
                setError('Failed to delete article: ' + err.message);
                // Revert the state change if save failed
                setConfig(config);
            } finally {
                setDeletingId(null);
            }
        }
    };

    // Save article
    const saveArticle = async () => {
        if (!editingArticle.title || !editingArticle.content) {
            setError('Title and content are required');
            return;
        }

        // Auto-generate slug if empty
        if (!editingArticle.slug) {
            editingArticle.slug = generateSlug(editingArticle.title);
        }

        // Auto-generate SEO title if empty
        if (!editingArticle.seoTitle) {
            editingArticle.seoTitle = editingArticle.title;
        }

        // Update the config state
        const updatedConfig = { ...config };
        const existingIndex = updatedConfig.articles.findIndex(a => a.id === editingArticle.id);
        
        if (existingIndex >= 0) {
            // Update existing article
            updatedConfig.articles[existingIndex] = editingArticle;
        } else {
            // Add new article
            updatedConfig.articles.push(editingArticle);
        }

        setConfig(updatedConfig);

        // Auto-save to database
        setSaving(true);
        try {
            const res = await fetch('/api/updates', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedConfig),
            });
            
            if (!res.ok) throw new Error('Failed to save article');
            
            setShowForm(false);
            setEditingArticle(null);
            setSuccess('Article saved and published successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            setError('Failed to save article: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    // Cancel editing
    const cancelEdit = () => {
        setShowForm(false);
        setEditingArticle(null);
    };

    // Update article field
    const updateArticleField = (field, value) => {
        setEditingArticle(prev => ({ ...prev, [field]: value }));
    };

    // Update tags
    const updateTags = (tagsString) => {
        const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
        updateArticleField('tags', tags);
    };

    if (loading) return <div className="p-6 text-center">Loading updates configuration...</div>;

    if (!config) return <div className="p-6 text-center">Could not load updates configuration.</div>;

    return (
        <div className="p-6">
            <FloatingAdminNav />
            
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <p className="text-gray-600">Manage updates articles and settings</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handleAddArticle}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            New Article
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                        >
                            <Save className="w-4 h-4" />
                            {saving ? 'Saving...' : 'Save All'}
                        </button>
                    </div>
                </div>

                {/* Status Messages */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                        {success}
                    </div>
                )}

                {/* Article Form Modal */}
                {showForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto">
                        <div className="bg-white rounded-lg p-6 w-full max-w-4xl my-8 max-h-none">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {editingArticle?.id && config.articles.find(a => a.id === editingArticle.id) ? 'Edit Article' : 'New Article'}
                                </h2>
                                <button onClick={cancelEdit} className="text-gray-400 hover:text-gray-600">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Left Column - Basic Info */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Title *</label>
                                        <input
                                            type="text"
                                            value={editingArticle?.title || ''}
                                            onChange={(e) => updateArticleField('title', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Article title"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
                                        <input
                                            type="text"
                                            id="slug"
                                            value={editingArticle.slug || ''}
                                            onChange={(e) => updateArticleField('slug', e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="e.g., my-awesome-article"
                                        />
                                        <p className="mt-2 text-xs text-gray-500">
                                            The slug is the URL-friendly version of the title. If left blank, it will be auto-generated.
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Excerpt</label>
                                        <textarea
                                            value={editingArticle?.excerpt || ''}
                                            onChange={(e) => updateArticleField('excerpt', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 h-24 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Brief description of the article"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-700">Author</label>
                                            <input
                                                type="text"
                                                value={editingArticle?.author || ''}
                                                onChange={(e) => updateArticleField('author', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Author name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-700">Category</label>
                                            <input
                                                type="text"
                                                value={editingArticle?.category || ''}
                                                onChange={(e) => updateArticleField('category', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Article category"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Author Bio</label>
                                        <textarea
                                            value={editingArticle?.authorBio || ''}
                                            onChange={(e) => updateArticleField('authorBio', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 h-20 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Brief author biography"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Tags (comma-separated)</label>
                                        <input
                                            type="text"
                                            value={editingArticle?.tags?.join(', ') || ''}
                                            onChange={(e) => updateTags(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="tag1, tag2, tag3"
                                        />
                                    </div>
                                </div>

                                {/* Right Column - Images & Settings */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Featured Image URL</label>
                                        <input
                                            type="url"
                                            value={editingArticle?.featuredImage || ''}
                                            onChange={(e) => updateArticleField('featuredImage', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="https://example.com/image.jpg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Author Image URL</label>
                                        <input
                                            type="url"
                                            value={editingArticle?.authorImage || ''}
                                            onChange={(e) => updateArticleField('authorImage', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="https://example.com/author.jpg"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-700">Date</label>
                                            <input
                                                type="date"
                                                value={editingArticle?.date || ''}
                                                onChange={(e) => updateArticleField('date', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-700">Read Time</label>
                                            <input
                                                type="text"
                                                value={editingArticle?.readTime || ''}
                                                onChange={(e) => updateArticleField('readTime', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="5 min read"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <label htmlFor="published" className="font-medium text-gray-700">Published Status</label>
                                        <div className="flex items-center mt-2">
                                            <button
                                                type="button"
                                                className={`${
                                                    editingArticle.published ? 'bg-indigo-600' : 'bg-gray-200'
                                                } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                                                onClick={() => updateArticleField('published', !editingArticle.published)}
                                            >
                                                <span
                                                    className={`${
                                                        editingArticle.published ? 'translate-x-6' : 'translate-x-1'
                                                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                                                />
                                            </button>
                                            <span className={`ml-3 text-sm font-medium ${editingArticle.published ? 'text-gray-900' : 'text-gray-500'}`}>
                                                {editingArticle.published ? 'Live on site' : 'Draft'}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-xs text-gray-500">
                                            Only published articles will be visible to the public.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={editingArticle?.featured || false}
                                                onChange={(e) => updateArticleField('featured', e.target.checked)}
                                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <span className="text-gray-700">Featured</span>
                                        </label>
                                    </div>

                                    {/* SEO Section */}
                                    <div className="border-t border-gray-200 pt-4">
                                        <h3 className="text-lg font-semibold mb-3 text-gray-900">SEO Settings</h3>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-gray-700">SEO Title</label>
                                                <input
                                                    type="text"
                                                    value={editingArticle?.seoTitle || ''}
                                                    onChange={(e) => updateArticleField('seoTitle', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="SEO optimized title"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-gray-700">SEO Description</label>
                                                <textarea
                                                    value={editingArticle?.seoDescription || ''}
                                                    onChange={(e) => updateArticleField('seoDescription', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 h-20 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Meta description for search engines"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-gray-700">SEO Keywords</label>
                                                <input
                                                    type="text"
                                                    value={editingArticle?.seoKeywords || ''}
                                                    onChange={(e) => updateArticleField('seoKeywords', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="keyword1, keyword2, keyword3"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Editor */}
                            <div className="mt-6">
                                <label className="block text-sm font-medium mb-2 text-gray-700">Content (HTML) *</label>
                                <textarea
                                    value={editingArticle?.content || ''}
                                    onChange={(e) => updateArticleField('content', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 h-64 font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Article content in HTML format..."
                                />
                                <p className="text-sm text-gray-500 mt-2">
                                    Use HTML tags for formatting: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, etc.
                                </p>
                            </div>

                            {/* Form Actions */}
                            <div className="flex justify-end gap-4 mt-6 pt-6 border-t border-gray-200">
                                <button
                                    onClick={cancelEdit}
                                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={saveArticle}
                                    disabled={saving}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {saving ? 'Saving...' : 'Save Article'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Articles List */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4 text-gray-900">Articles ({config.articles?.length || 0})</h2>
                    
                    {config.articles?.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>No articles yet. Click "New Article" to get started.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {config.articles?.map((article, index) => (
                                <div key={article.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between border border-gray-200">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-semibold text-lg text-gray-900">{article.title}</h3>
                                            <div className="flex gap-2">
                                                {article.published && (
                                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Published</span>
                                                )}
                                                {article.featured && (
                                                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Featured</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-2">
                                            <span className="flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <User className="w-4 h-4" />
                                                    {article.author}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {article.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Tag className="w-4 h-4" />
                                                    {article.category}
                                                </span>
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm">{article.excerpt}</p>
                                    </div>
                                    <div className="flex gap-2 ml-4">
                                        <button
                                            onClick={() => window.open(`/updates/${article.slug}`, '_blank')}
                                            className="p-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                                            title="View Article"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => editArticle(article)}
                                            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                                            title="Edit Article"
                                        >
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => deleteArticle(article.id)}
                                            disabled={deletingId === article.id}
                                            className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-red-700 shadow-sm min-w-[40px] min-h-[40px] flex items-center justify-center"
                                            title={deletingId === article.id ? "Deleting..." : "Delete Article"}
                                            style={{ 
                                                backgroundColor: '#dc2626', 
                                                color: 'white',
                                                border: '1px solid #b91c1c',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {deletingId === article.id ? (
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <Trash2 className="w-4 h-4" style={{ color: 'white', fill: 'none', stroke: 'currentColor' }} />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Updates Settings */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h2 className="text-xl font-bold mb-4 text-gray-900">Updates Settings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">Articles Per Page</label>
                            <input
                                type="number"
                                value={config.settings?.articlesPerPage || 10}
                                onChange={(e) => setConfig(prev => ({
                                    ...prev,
                                    settings: { ...prev.settings, articlesPerPage: parseInt(e.target.value) }
                                }))}
                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                min="1"
                                max="20"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={config.settings?.showExcerpts || false}
                                    onChange={(e) => setConfig(prev => ({
                                        ...prev,
                                        settings: { ...prev.settings, showExcerpts: e.target.checked }
                                    }))}
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <span className="text-gray-700">Show Excerpts</span>
                            </label>
                        </div>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={config.settings?.showAuthor || false}
                                    onChange={(e) => setConfig(prev => ({
                                        ...prev,
                                        settings: { ...prev.settings, showAuthor: e.target.checked }
                                    }))}
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <span className="text-gray-700">Show Author</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatesAdmin; 