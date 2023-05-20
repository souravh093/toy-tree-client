import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <section>
      <div className="container flex flex-col justify-center p-4 mx-auto min-h-[calc(100vh-75px)] md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-20 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold text-2xl mb-3">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h3>
            <p className="mt-1">
              An access token is a short lived limited privilege that use to
              protected resources. On the other hand refresh tokens is a long
              lived high privilege that can use obtain new access tokens. Access
              token basically stored in local storage, cookies and session
              storage. on the other hand refresh tokens are very sensitive
              because of that it stored to in the database or any hardware
              storage.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl mb-3">
              Different between SQL and NoSQL databases?
            </h3>
            <p className="mt-1">
              We know there are two types database 1.SQL 2.NoSQL but there two
              database have major different like SQL database is base on table
              format on the other hand NoSQL database is like JSON format. SQL
              database is limited customization on the other hand NoSQL database
              is so much flexibility. SQL database query language is SQL on the
              other hand NoSQL database specific query language or adhoc
              queries. SQL database name like postgreSQL, MySQL on the other
              hand NoSQL database name like MongoDB. SQL database more expensive
              NoSQL database less expensive.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl mb-3">
              What is express js? What is Nest JS?
            </h3>
            <p className="mt-1">
              Express js is a NodeJs Framework. Express js is very useful and
              very developer friendly. Express js is very easy to compare to
              NodeJs. ExpressJs You can handle route just on the other hand
              NodeJs you can type lot of code for comparing to Express. Nest js
              is another NodeJS framework that easy to use but it create using
              TypeScript we can do anything using nest js like build Rest APIs,
              MVC applications, Web Sockets. Some few month is very popular in
              the web industry.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl mb-3">
              What is MongoDB aggregate and how does it work ?
            </h3>
            <p className="mt-1">
              MongoDB Aggregate is a framework for performing data processing
              operation. Using Aggregate you can manipulate MongoDB collection
              do some advanced operation like sorting, filtering, joining and
              transforming dta within mongoDb. MongoDb Aggregate doing lot mre
              work like matching stage, projection stage, filtering stage,
              sorting stage etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
