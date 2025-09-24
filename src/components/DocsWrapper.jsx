// src/components/DocsWrapper.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import './DocsWrapper.css'

// Update the glob path to match your actual docs folder location
const docs = import.meta.glob('../docs/*.md', { query: '?raw', import: 'default' });

export default function DocsWrapper() {
  const { docId } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const load = async () => {
      // Fix: Use the correct key for Vite's import.meta.glob
      const file = `../docs/${docId}.md`;
      const importer = docs[file];

      if (!importer) {
        setContent("# 404 - Document not found");
        return;
      }

      const raw = await importer();
      setContent(raw);
    };

    load();
  }, [docId]);

  return content ? (
    <div className="content">
      <ReactMarkdown
        children={content}
        skipHtml={false}
        components={{}}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
