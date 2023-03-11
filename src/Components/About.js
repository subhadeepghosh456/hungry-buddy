import React from "react";

function About() {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex items-center justify-center mb-8">
        <img
          src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="food"
          className="rounded-md shadow-md w-[40%]"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices mollis malesuada.
        Suspendisse potenti. In a sapien sed tortor tempor feugiat. Praesent malesuada nisi id enim
        tempor vestibulum. Sed fringilla volutpat nibh, eu auctor magna ullamcorper vel.
      </p>
      <p className="mb-4">
        Sed ac libero at ante rutrum convallis vel a nunc. Nullam a turpis a nisl convallis
        ultricies. Integer porttitor, purus ac lobortis rutrum, neque ex interdum magna, nec
        interdum lorem velit ac odio. Praesent non metus eu ante tempor eleifend.
      </p>
      <p className="mb-4">
        Quisque auctor diam sit amet mauris molestie, ut congue augue sagittis. Vivamus vel purus
        sit amet quam dapibus posuere vel eu nulla. Fusce non ante ullamcorper, dignissim eros
        eget, tristique quam.
      </p>
    </div>
  );
}

export default About;

