'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Article {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    featured: boolean;
    content: string;
}

export default function Read() {
    const [allArticles, setAllArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['content', 'articles']));
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/articles');
                const articles = await response.json();
                setAllArticles(articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    // Group articles by tags for folder structure
    const articlesByCategory = allArticles.reduce((acc, article) => {
        const category = article.tags[0] || 'general';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(article);
        return acc;
    }, {} as Record<string, typeof allArticles>);

    const toggleFolder = (folderName: string) => {
        const newExpanded = new Set(expandedFolders);
        if (newExpanded.has(folderName)) {
            newExpanded.delete(folderName);
        } else {
            newExpanded.add(folderName);
        }
        setExpandedFolders(newExpanded);
    };

    if (loading) {
        return (
            <>
                <section className="page-header">
                    <div className="page-header-content">
                        <h1 className="page-title">LinuxWale Content</h1>
                        <p className="page-subtitle">Browse articles like a true Linux user 🐧</p>
                    </div>
                </section>
                <div className="hero-separator"></div>
                <main className="terminal-explorer-main">
                    <div className="terminal-explorer-container">
                        <div className="loading-terminal">
                            <div className="loading-text">
                                <span className="loading-prompt">user@linuxwale:~/content/articles$</span>
                                <span className="loading-command">ls -la</span>
                                <div className="loading-dots">
                                    <span>.</span><span>.</span><span>.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-content">
                    <h1 className="page-title">LinuxWale Content</h1>
                    <p className="page-subtitle">Browse articles like a true Linux user 🐧</p>
                </div>
            </section>

            {/* Green Line Separator */}
            <div className="hero-separator"></div>

            {/* Two-Column Layout: File Explorer + Preview */}
            <main className="file-explorer-main">
                <div className="file-explorer-layout">
                    {/* Left Panel - File Explorer */}
                    <div className="file-explorer-sidebar">
                        <div className="explorer-header">
                            <h3>📁 Content Explorer</h3>
                            <span className="file-count">{allArticles.length} articles</span>
                        </div>

                        <div className="file-tree">
                            {/* Content folder */}
                            <div className="tree-item">
                                <div 
                                    className="tree-folder"
                                    onClick={() => toggleFolder('content')}
                                >
                                    <span className="expand-icon">
                                        {expandedFolders.has('content') ? '▼' : '▶'}
                                    </span>
                                    <span className="folder-icon">📁</span>
                                    <span className="folder-name">content</span>
                                    <span className="item-count">({allArticles.length})</span>
                                </div>

                                {expandedFolders.has('content') && (
                                    <div className="tree-children">
                                        {/* Articles folder */}
                                        <div className="tree-item">
                                            <div 
                                                className="tree-folder"
                                                onClick={() => toggleFolder('articles')}
                                            >
                                                <span className="expand-icon">
                                                    {expandedFolders.has('articles') ? '▼' : '▶'}
                                                </span>
                                                <span className="folder-icon">📁</span>
                                                <span className="folder-name">articles</span>
                                                <span className="item-count">({allArticles.length})</span>
                                            </div>

                                            {expandedFolders.has('articles') && (
                                                <div className="tree-children">
                                                    {/* Article files */}
                                                    {allArticles.map((article) => (
                                                        <div key={article.slug} className="tree-file-container">
                                                            <div 
                                                                className={`tree-file ${selectedArticle?.slug === article.slug ? 'selected' : ''}`}
                                                                onClick={() => setSelectedArticle(article)}
                                                            >
                                                                <span className="file-icon">📄</span>
                                                                <span className="file-name">{article.slug}.md</span>
                                                                <span className="file-size">{Math.floor(article.content.length / 100)}KB</span>
                                                            </div>
                                                            <Link 
                                                                href={`/read/${article.slug}`}
                                                                className="file-open-link"
                                                                title="Open article"
                                                            >
                                                                →
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - File Preview */}
                    <div className="file-preview-panel">
                        {selectedArticle ? (
                            <div className="preview-content">
                                <div className="preview-header">
                                    <h2 className="preview-title">{selectedArticle.title}</h2>
                                    <Link 
                                        href={`/read/${selectedArticle.slug}`}
                                        className="open-article-btn"
                                    >
                                        Open Article →
                                    </Link>
                                </div>
                                
                                <p className="preview-description">{selectedArticle.description}</p>
                                
                                <div className="preview-meta">
                                    <div className="meta-row">
                                        <span className="meta-label">📅 Date:</span>
                                        <span className="meta-value">{new Date(selectedArticle.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="meta-row">
                                        <span className="meta-label">✍️ Author:</span>
                                        <span className="meta-value">{selectedArticle.author}</span>
                                    </div>
                                    <div className="meta-row">
                                        <span className="meta-label">📊 Size:</span>
                                        <span className="meta-value">{Math.floor(selectedArticle.content.length / 100)}KB</span>
                                    </div>
                                </div>
                                
                                <div className="preview-tags">
                                    <span className="tags-label">🏷️ Tags:</span>
                                    <div className="tags-list">
                                        {selectedArticle.tags.map(tag => (
                                            <span key={tag} className="preview-tag">#{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="preview-content-sample">
                                    <h4>📝 Content Preview:</h4>
                                    <div className="content-sample">
                                        {selectedArticle.content.substring(0, 300)}...
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="preview-placeholder">
                                <div className="placeholder-content">
                                    <span className="placeholder-icon">📄</span>
                                    <h3>Select a file to preview</h3>
                                    <p>Click on any article file to see its details and preview here.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}