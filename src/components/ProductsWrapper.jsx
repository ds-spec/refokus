import React from "react";
import Products from "./Products";

const ProductsWrapper = () => {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      liveProject: true,
      caseStudy: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      liveProject: true,
      caseStudy: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      liveProject: true,
      caseStudy: false,
    },
    {
      title: "Yahoo",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      liveProject: true,
      caseStudy: false,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      liveProject: true,
      caseStudy: false,
    },
  ];
  return (
    <div>
      <Products />
    </div>
  );
};

export default ProductsWrapper;
