'use client';

import { ReactNode } from 'react';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Simple markdown to HTML converter for basic formatting
  const renderMarkdown = (text: string): ReactNode => {
    const lines = text.split('\n');
    const elements: ReactNode[] = [];
    let currentIndex = 0;

    while (currentIndex < lines.length) {
      const line = lines[currentIndex];
      
      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={currentIndex} className="article-h1">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={currentIndex} className="article-h2">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={currentIndex} className="article-h3">
            {line.substring(4)}
          </h3>
        );
      }
      // Code blocks
      else if (line.startsWith('```')) {
        const codeLines: string[] = [];
        currentIndex++;
        while (currentIndex < lines.length && !lines[currentIndex].startsWith('```')) {
          codeLines.push(lines[currentIndex]);
          currentIndex++;
        }
        elements.push(
          <pre key={currentIndex} className="article-code-block">
            <code>{codeLines.join('\n')}</code>
          </pre>
        );
      }
      // Lists
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        const listItems: string[] = [];
        let listIndex = currentIndex;
        while (listIndex < lines.length && (lines[listIndex].startsWith('- ') || lines[listIndex].startsWith('* '))) {
          listItems.push(lines[listIndex].substring(2));
          listIndex++;
        }
        elements.push(
          <ul key={currentIndex} className="article-list">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        currentIndex = listIndex - 1;
      }
      // Numbered lists
      else if (/^\d+\.\s/.test(line)) {
        const listItems: string[] = [];
        let listIndex = currentIndex;
        while (listIndex < lines.length && /^\d+\.\s/.test(lines[listIndex])) {
          listItems.push(lines[listIndex].replace(/^\d+\.\s/, ''));
          listIndex++;
        }
        elements.push(
          <ol key={currentIndex} className="article-ordered-list">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        );
        currentIndex = listIndex - 1;
      }
      // Paragraphs
      else if (line.trim() !== '') {
        // Handle inline code
        const processedLine = line.replace(/`([^`]+)`/g, '<code class="article-inline-code">$1</code>');
        elements.push(
          <p key={currentIndex} className="article-paragraph" dangerouslySetInnerHTML={{ __html: processedLine }} />
        );
      }
      // Empty lines
      else {
        elements.push(<br key={currentIndex} />);
      }
      
      currentIndex++;
    }

    return elements;
  };

  return (
    <div className="markdown-content">
      {renderMarkdown(content)}
    </div>
  );
}