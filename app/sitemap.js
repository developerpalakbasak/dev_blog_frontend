import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default async function sitemap() {
  // Fetch blogs from the backend
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/blogs`);
      return response.data.blogs;
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
      return [];
    }
  };

  const blogs = await fetchBlogs();

  // Generate the sitemap entries for blogs
  const blogEntries = blogs.map((blog) => ({
    url: `${siteUrl}/blog/${blog.slug}`, // Adjust the URL structure as needed
    lastModified: new Date(blog.date).toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Add other static pages if needed
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Add more static pages as needed
  ];

  // Combine static pages and blog entries
  return [...staticPages, ...blogEntries];
}