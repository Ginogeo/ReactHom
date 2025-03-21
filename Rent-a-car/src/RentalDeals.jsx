"use client";
import React from "react";

const RentalDeals = () => {
  const carData = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be3d4c7717a05584d8dab72e7c52eaf687617687",
      altText: "Honda City",
      name: "Honda City",
      rating: "4.5",
      reviews: "2,036",
      passengers: 4,
      transmission: "Auto",
      hasAC: true,
      doors: 4,
      price: "₹ 1,600",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9165feda754d4a0663ca771fdc8a4321184bb970",
      altText: "Jeep Wrangler",
      name: "Jeep Wrangler",
      rating: "4.3",
      reviews: "2,236",
      passengers: 2,
      transmission: "Auto",
      hasAC: true,
      doors: 2,
      price: "$2,300",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be3d4c7717a05584d8dab72e7c52eaf687617687",
      altText: "Honda City",
      name: "Honda City",
      rating: "4.5",
      reviews: "2,036",
      passengers: 4,
      transmission: "Auto",
      hasAC: true,
      doors: 4,
      price: "₹ 1,600",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9165feda754d4a0663ca771fdc8a4321184bb970",
      altText: "Honda City",
      name: "Honda City",
      rating: "4.5",
      reviews: "2,036",
      passengers: 4,
      transmission: "Auto",
      hasAC: true,
      doors: 4,
      price: "₹ 1,600",
    },
  ];

  const IconText = ({ icon, text }) => (
    <div className="flex gap-1 items-center text-xs text-neutral-400">
      <i className={`ti ti-${icon}`} />
      <span>{text}</span>
    </div>
  );

  const CarCard = ({
    image,
    altText,
    name,
    rating,
    reviews,
    passengers,
    transmission,
    hasAC,
    doors,
    price,
  }) => (
    <article className="overflow-hidden w-64 bg-white rounded-2xl">
      <img src={image} className="object-cover w-full h-auto" alt={altText} />
      <div className="p-6">
        <div className="mb-4">
          <h3 className="mb-3 text-base text-neutral-800">{name}</h3>
          <p className="text-xs text-zinc-500">
            {rating} ({reviews} reviews)
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <IconText icon="users" text={`${passengers} Passengers`} />
          <IconText icon="steering-wheel" text={transmission} />
          <IconText icon="snowflake" text="Air Conditioning" />
          <IconText icon="car-side" text={`${doors} Doors`} />
        </div>
        <div className="flex justify-between items-center px-0 py-6 border-t border-solid border-t-neutral-200">
          <span>Price</span>
          <span className="text-base font-bold text-zinc-800">
            {price} /day
          </span>
        </div>
        <button className="flex gap-2 justify-center items-center p-2 w-full text-sm text-white rounded-lg cursor-pointer bg-blue-950 border-[none]">
          <span>Rent Now</span>
          <i className="ti ti-arrow-right" />
        </button>
      </div>
    </article>
  );

  return (
    <section id="rental-deals" className="px-40 py-20 bg-slate-950 max-md:p-10">
      <header className="mb-20 text-center">
        <p className="px-8 py-4 mb-8 text-sm bg-yellow-400 rounded-lg text-blue-950">
          POPULAR RENTAL DEALS
        </p>
        <h2 className="text-4xl font-medium text-stone-200 max-sm:text-3xl">
          Most popular cars rental deals
        </h2>
      </header>

      <div className="flex gap-8 justify-center mt-16 ml-0 max-md:flex-col max-md:items-center">
        {carData.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>

      <button className="flex gap-2 justify-center items-center p-2 mx-auto mt-16 mb-0 text-sm text-yellow-400 rounded-lg border border-white border-solid cursor-pointer">
        <span>Show all vehicles</span>
        <i className="ti ti-arrow-right" />
      </button>
    </section>
  );
};

export default RentalDeals;