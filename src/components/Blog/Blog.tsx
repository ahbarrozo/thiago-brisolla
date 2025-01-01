/**
 *  Component for blog posts. It contains a title, 
 *  subtitle, text and images. Images is an array 
 *  of filepaths.
 */

'use client';

import BlogPost, { BlogPostProps } from "../BlogPost/BlogPost";
import styles from "./Blog.module.css";

interface BlogProps {
  blogPosts: BlogPostProps[];
}

export default function Blog({ blogPosts }: BlogProps) {
    return (
        <div className={styles['blog']}>
            {blogPosts.map(post => (
                <BlogPost key={post.id} {...post} />
            ))}
        </div>
    );
}
