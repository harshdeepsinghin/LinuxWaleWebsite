import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  featured: boolean;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export function getAllArticles(): Article[] {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    const articles = fileNames
      .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
      .map(name => {
        const slug = name.replace(/\.mdx?$/, '');
        const fullPath = path.join(articlesDirectory, name);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          date: data.date || '',
          author: data.author || 'LinuxWale Team',
          tags: data.tags || [],
          featured: data.featured || false,
          content,
        } as Article;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return articles;
  } catch (error) {
    console.error('Error reading articles:', error);
    return [];
  }
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter(article => article.featured);
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      const mdxPath = path.join(articlesDirectory, `${slug}.mdx`);
      if (!fs.existsSync(mdxPath)) {
        return null;
      }
      const fileContents = fs.readFileSync(mdxPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date || '',
        author: data.author || 'LinuxWale Team',
        tags: data.tags || [],
        featured: data.featured || false,
        content,
      } as Article;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'LinuxWale Team',
      tags: data.tags || [],
      featured: data.featured || false,
      content,
    } as Article;
  } catch (error) {
    console.error('Error reading article:', error);
    return null;
  }
}