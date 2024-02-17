import React from "react";
import "./WorkType.css";

const callouts = [
  {
    name: "Passionate about building seamless and efficient web application, I bring a wealth of experience in MERN stack - MongoDB, Express.js, React.js and Node.js. I am committed to staying at the forefront of new technologies.",
    description: "MERN Developer",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "I am a passionate Junior Flutter Developer ready to bring innovative ideas to life. With a foundation in the Flutter framework, I am eager to contribute to creating dynamic and visually appealing cross-platform applications.",
    description: "Flutter Developer",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "I am passionate about crafting delightful and user-centric digital experiences. As a design enthusiast in the learning phase, I am eager to explore and contribute my evolving skills to create visually appealing and intuitive User interfaces.",
    description: "UI/UX Designer",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const WorkType2 = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-2">
        <div className="mx-auto max-w-2xl py-2 sm:py-2 lg:max-w-none lg:py-3">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-3 lg:space-y-0">
            <div className="group relative">
                <div className="wt1image">
                  <div className="wt1image2"></div>
                </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <span className="absolute inset-0" />
                <p>
                  Passionate about building seamless and efficient web
                  application, I bring a wealth of experience in MERN stack -
                  MongoDB, Express.js, React.js and Node.js. I am committed to
                  staying at the forefront of new technologies.
                </p>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                MERN Developer
              </p>
            </div>
            <div className="group relative">
                <div className="wt2image">
                  <div className="wt2image2"></div>
                </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <span className="absolute inset-0" />
                <p>
                I am a Junior Flutter Developer ready to bring innovative ideas to life. With a foundation in the Flutter framework, I am eager to contribute to creating dynamic and visually appealing cross-platform applications.
                </p>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                Flutter Developer
              </p>
            </div>
            <div className="group relative">
                <div className="wt3image">
                  <div className="wt3image2"></div>
                </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <span className="absolute inset-0" />
                <p>
                I am passionate about crafting delightful and user-centric digital experiences. As a design enthusiast in the learning phase, I am eager to explore and contribute my evolving skills to create visually appealing and intuitive User interfaces.
                </p>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkType2;
