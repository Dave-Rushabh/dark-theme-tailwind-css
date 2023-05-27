import React from "react";

const Blogs: React.FC = () => {
  const blogPosts = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      date: "May 15, 2023",
      author: "John Doe",
      image: "https://random.imagecdn.app/500/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md p-4 dark:bg-slate-700"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 dark:bg-slate-600">
              <h2 className="text-lg font-bold mb-2 dark:text-white">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 dark:text-white">
                {post.description}
              </p>

              <div className="flex items-center">
                <span className="text-gray-500 text-sm dark:text-white">
                  {post.date}
                </span>
                <span className="text-gray-500 text-sm mx-2 dark:text-white">
                  •
                </span>
                <span className="text-gray-500 text-sm dark:text-white">
                  {post.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
