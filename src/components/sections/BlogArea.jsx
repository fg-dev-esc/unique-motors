import React from 'react';

const BlogArea = () => {
  const blogPosts = [
    {
      id: 1,
      title: "There are many variations of the passages available suffered",
      image: "/assets/img/blog/01.jpg",
      author: "Alicia Davis",
      date: "March 17, 2024",
      excerpt: "There are many variations of the passages available suffered"
    },
    {
      id: 2,
      title: "There are many variations of the passages available suffered",
      image: "/assets/img/blog/02.jpg",
      author: "Alicia Davis",
      date: "March 17, 2024",
      excerpt: "There are many variations of the passages available suffered"
    },
    {
      id: 3,
      title: "There are many variations of the passages available suffered",
      image: "/assets/img/blog/03.jpg",
      author: "Alicia Davis",
      date: "March 17, 2024",
      excerpt: "There are many variations of the passages available suffered"
    }
  ];

  const handleReadMore = (blogId) => {
    console.log('Reading more about blog:', blogId);
  };

  return (
    <div className="blog-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Our Blog</span>
              <h2 className="site-title">Latest News & <span>Blog</span></h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-item-img">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle"></i> By {post.author}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt"></i> {post.date}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        handleReadMore(post.id);
                      }}
                      style={{ cursor: 'pointer', color: '#222' }}
                    >
                      {post.title}
                    </span>
                  </h4>
                  <button 
                    className="theme-btn"
                    onClick={() => handleReadMore(post.id)}
                  >
                    Read More<i className="far fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArea;