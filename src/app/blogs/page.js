import React from 'react';
import Link from 'next/link';
import { blogs } from './blogsData';

export default function BlogsPage() {
  return (
    <div className="px-4 py-8">
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <Link 
            href={`/blogs/${blog.id}`} 
            key={blog.id}
            className="block text-lg hover:underline hover:text-blue-800 transition-colors"
          >
            {index + 1}. {blog.title}
          </Link>
        ))}
      </div>
    </div>
  );
} 