import React from "react";

const Blog = () => {
  return (
    <section>
      <div className="container flex flex-col justify-center p-4 mx-auto min-h-[calc(100vh-75px)] md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold text-xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p className="mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Different between SQL and NoSQL databases?</h3>
            <p className="mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">What is express js? What is Nest JS?</h3>
            <p className="mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">What is MongoDB aggregate and how does it work ?</h3>
            <p className="mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
