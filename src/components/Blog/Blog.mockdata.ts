import { BlogPostProps } from "../BlogPost/BlogPost";

export const blogPosts: BlogPostProps[] = [
    {
        id: 1,
        title: "First Post",
        subtitle: "An interesting subtitle",
        text: "This is the content of the first blog post...",
        images: ["/assets/post1.jpg"],
    },
    {
        id: 2,
        title: "Second Post",
        subtitle: "Another great subtitle",
        text: "This is the content of the second blog post...",
        images: ["/assets/post2.jpg"],
    },
    // Add more posts as needed
];
