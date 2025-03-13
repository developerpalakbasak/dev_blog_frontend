import BlogModel from "@/lib/models/Blogmodel";

const generateUniqueSlug = async (title) => {
    let slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens

    let uniqueSlug = slug;
    let count = 1;

    // Check if slug already exists in the database
    while (await BlogModel.exists({ slug: uniqueSlug })) {
        uniqueSlug = `${slug}-${count}`;
        count++;
    }

    return uniqueSlug;
};

export default generateUniqueSlug