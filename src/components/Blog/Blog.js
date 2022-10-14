import React from "react";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Short description of react router, context API and useref.
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is the react router?
            </summary>
            <div className="px-4 pb-4">
              <p>
                A tool that allows you to handle routes in a web app, using
                dynamic routing. Dynamic routing takes place as the app is
                rendering on your machine, unlike the old routing architecture
                where the routing is handled in a configuration outside of a
                running app.{" "}
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does context API works?
            </summary>
            <div className="px-4 pb-4">
              <p>
                React Context provides a way to pass data through the component
                tree without having to pass props down manually at every level.
                In some sense, it simulates “Global” data in React component
                Tree.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is useeffect?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Ref means just reference, so it can be a reference to anything
                (DOM node, Javascript value, etc). The useRef hook returns a
                mutable object which doesn’t re-render the component when it’s
                changed. Think it like useState, but unlike useState, doesn’t
                trigger re-render of the component. The object that useRef
                returns have a current property that can hold any modifiable
                value.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
