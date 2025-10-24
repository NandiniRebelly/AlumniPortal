{/*import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Alumni Meet 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Graduation Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Campus Tour"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Alumni Gallery</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;*/}



import React from 'react';
import './Gallery.css'; // Import CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Alumni Meet 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Graduation Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Campus Tour"
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Alumni Gallery</h1>
      
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm gallery-card">
              <img 
                src={image.url} 
                alt={image.title}
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{image.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
