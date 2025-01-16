import React from "react";

const Gallery = () => {
  return (
    <div className="text-[--theme-color1]">
      <div className="flex items-top justify-center p-6 ">
        <div className=" p-6  shadow-lg max-w-md w-full text-center border">
          <h1 className="text-3xl font-semibold  mb-4">
            My Gallery
          </h1>
          <p className="text-lg ">
            I am a Web Application Developer, passionate about building modern,
            responsive, and user-friendly web applications.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 px-5 py-5  ">
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img src="/src/assets/carasol/c_img-4.jpg" alt="Shoes" />
          </figure>
          <div className="card-body text-slate-950">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img src="/src/assets/carasol/c_img-4.jpg" alt="Shoes" />
          </figure>
          <div className="card-body  text-slate-950">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img src="/src/assets/carasol/c_img-4.jpg" alt="Shoes" />
          </figure>
          <div className="card-body  text-slate-950">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img src="/src/assets/carasol/c_img-1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body  text-slate-950">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img src="/src/assets/carasol/c_img-1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body  text-slate-950">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img src="/src/assets/carasol/c_img-1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body  text-slate-950">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
