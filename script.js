// Sample blog data (replace with your own data or fetch from a backend)
const blogs = [
    { title: 'Tech Blog 1', category: 'tech' },
    { title: 'Travel Blog 1', category: 'travel' },
    { title: 'Food Blog 1', category: 'food' },
    { title: 'Tech Blog 2', category: 'tech' },
    { title: 'Travel Blog 2', category: 'travel' },
    { title: 'Food Blog 2', category: 'food' },
];

// DOM elements
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const blogList = document.getElementById('blog-list');

// Event listeners for search and filtering
searchInput.addEventListener('input', updateBlogList);
filterSelect.addEventListener('change', updateBlogList);

// Function to update the blog list based on search and filter criteria
function updateBlogList() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = filterSelect.value;

    const filteredBlogs = blogs.filter((blog) => {
        const title = blog.title.toLowerCase();
        const category = blog.category;

        const matchesSearchTerm = title.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

        return matchesSearchTerm && matchesCategory;
    });

    displayBlogs(filteredBlogs);
}

// Function to display the filtered blogs
function displayBlogs(filteredBlogs) {
    blogList.innerHTML = '';

    if (filteredBlogs.length === 0) {
        blogList.textContent = 'No matching blogs found.';
    } else {
        filteredBlogs.forEach((blog) => {
            const blogItem = document.createElement('div');
            blogItem.classList.add('blog-item');
            blogItem.textContent = blog.title;
            blogList.appendChild(blogItem);
        });
    }
}

// Initial display of blogs
displayBlogs(blogs);
