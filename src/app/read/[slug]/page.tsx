import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found - LinuxWale',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} - LinuxWale`,
    description: article.description,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Article Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">{article.title}</h1>
          <p className="page-subtitle">{article.description}</p>
          <div className="article-meta-header">
            <span className="article-date">{new Date(article.date).toLocaleDateString()}</span>
            <span className="article-author">by {article.author}</span>
          </div>
        </div>
      </section>

      {/* Green Line Separator */}
      <div className="hero-separator"></div>

      {/* Article Content */}
      <main className="article-main">
        <div className="article-container">
          <div className="article-navigation">
            <Link href="/read" className="back-to-articles">
              ← Back to Articles
            </Link>
          </div>

          <article className="article-content">
            <div className="article-tags-header">
              {article.tags.map((tag) => (
                <span key={tag} className="article-tag">
                  #{tag}
                </span>
              ))}
            </div>

            <MarkdownRenderer content={article.content} />
          </article>

          <div className="article-footer">
            <div className="article-navigation">
              <Link href="/read" className="back-to-articles">
                ← Back to Articles
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}