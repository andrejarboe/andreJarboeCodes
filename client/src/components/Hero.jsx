import React from "react";

export function Hero() {
  return (
    <section className="mt-12 mx-auto container max-w-7xl py-12 px-4 flex">
      <div className="w-full lg:w-3/5 flex flex-col my-auto ">
        <p className="text-2xl font-light">
          Hi, my name is <span className="text-red-500">Andre Jarboe,</span> I'am a 
        </p>
        <h1 className="text-6xl font-extrabold text-[#3f3d56]">Software Engineer</h1>
        <p class="text-lg text-gray-600 font-light leading-relaxed pt-8">
          I enjoy building tools that impact. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Itaque quasi perspiciatis quis deserunt
          quaerat voluptatum perferendis eos fugit, in ut facere iusto quam
          minima laboriosam necessitatibus porro aspernatur! Ullam, minus.
        </p>

        <div className="mt-8 flex ">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-700"
            >
              View Linkedin
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 px-5 py-3 text-base font-medium text-red-700 hover:bg-red-200"
            >
              View Github
            </a>
          </div>
        </div>
      </div>
      <div class="lg:w-2/5 justify-end">
        {/* <img src="https://cdn.devdojo.com/images/january2022/heronew.png" /> */}
        <img
          // className="hidden h-60 space-y-5 px-4 md:inline-flex lg:h-96"
          className="hidden md:block"
          src="/img/hero.png"
          alt="abstract pattern"
        />
      </div>
    </section>
  );
}
