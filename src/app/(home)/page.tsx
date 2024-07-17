import React from "react";
import Intro from "./Intro";
import { FeaturedBlogPosts } from "./featured-posts";

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  image:
    "https://res.cloudinary.com/b-bassey/image/upload/v1715690176/brand/bjorn_donald_dp.jpg",
  url: "https://bjorncode.dev",
  sameAs: ["https://bjorncode.dev/about"],
  logo: "https://bjorncode.dev/media/brand/logo-dev.png",
  name: "Bjorn-Donald Bassey",
  description:
    "Passionate and creative full-stack software engineer from Nigeria 🇳🇬 ",
  email: "hola@bjorncode.dev",
  foundingDate: new Date("1997-01-28T18:30:00-05:00").toISOString(),
});

const HomePage = () => {
  return (
    <>
      <Intro />
      <FeaturedBlogPosts />
      <script type="application/ld+json" suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
};

export default HomePage;
