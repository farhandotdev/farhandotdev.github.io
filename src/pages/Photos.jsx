import React from 'react'
import p1 from "../assets/photos/p1.jpg"
import p2 from "../assets/photos/p2.jpg"
import p3 from "../assets/photos/p3.jpg"
import p4 from "../assets/photos/p4.jpeg"
import p5 from "../assets/photos/p5.jpg"
import p6 from "../assets/photos/p6.jpg"
import p7 from "../assets/photos/p7.jpg"
import p8 from "../assets/photos/p8.jpg"
import p9 from "../assets/photos/p9.jpg"
import p10 from "../assets/photos/p10.jpg"
import p11 from "../assets/photos/p11.jpg"
import p12 from "../assets/photos/p12.jpg"
import p13 from "../assets/photos/p13.jpg"
import p14 from "../assets/photos/p14.jpg"
import p15 from "../assets/photos/p15.jpg"
import p16 from "../assets/photos/p16.jpg"
import p17 from "../assets/photos/p17.jpg"
import p18 from "../assets/photos/p18.jpg"
import p19 from "../assets/photos/p19.jpeg"
import p20 from "../assets/photos/p20.jpg"
import p21 from "../assets/photos/p21.jpg"
import p22 from "../assets/photos/p22.jpg"
import p23 from "../assets/photos/p23.jpeg"
import p24 from "../assets/photos/p24.jpeg"
import p25 from "../assets/photos/p25.jpg"
import p26 from "../assets/photos/p26.jpg"

const photos = [
  {
    id: 1,
    href: '#',
    imageSrc: p1,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    href: '#',
    imageSrc: p2,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    href: '#',
    imageSrc: p3,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 4,
    href: '#',
    imageSrc: p4,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 5,
    href: '#',
    imageSrc: p5,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 6,
    href: '#',
    imageSrc: p6,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 7,
    href: '#',
    imageSrc: p7,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 8,
    href: '#',
    imageSrc: p8,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 9,
    href: '#',
    imageSrc: p9,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 10,
    href: '#',
    imageSrc: p10,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 11,
    href: '#',
    imageSrc: p11,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 12,
    href: '#',
    imageSrc: p12,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 13,
    href: '#',
    imageSrc: p13,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 14,
    href: '#',
    imageSrc: p14,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 15,
    href: '#',
    imageSrc: p15,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 16,
    href: '#',
    imageSrc: p16,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 17,
    href: '#',
    imageSrc: p17,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 18,
    href: '#',
    imageSrc: p18,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 19,
    href: '#',
    imageSrc: p19,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 20,
    href: '#',
    imageSrc: p20,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 21,
    href: '#',
    imageSrc: p21,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 22,
    href: '#',
    imageSrc: p22,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 23,
    href: '#',
    imageSrc: p23,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 24,
    href: '#',
    imageSrc: p24,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 25,
    href: '#',
    imageSrc: p25,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 26,
    href: '#',
    imageSrc: p26,
    imageAlt: "Front of men's Basic Tee in black.",
  },
]

const Photos = () => {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-2 sm:py-32 lg:max-w-7xl lg:px-0">
     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
        {photos.map((photo) => (
          <div key={photo.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
              <img
                src={photo.imageSrc}
                alt={photo.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Photos