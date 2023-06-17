import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Blog = () => {
  return (
    <div>
        <NavBar />
        <div className="container mx-auto py-4 text-slate-950 font-bold">
      <div className="my-3 border-4 rounded-xl p-3 borderstone-800">
        <h1>
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p>
          <span>Access Token:</span> An access token is a credential that is
          used to authenticate and authorize a users access to protected
          resources or endpoints. It is usually short-lived and has an
          expiration time. Access tokens contain information like the users
          identity or claims associated with the user. The client includes the
          access token in each request to access protected resources. The server
          validates the access token to grant or deny access.
        </p>
        <p>
          <span>Refresh Token:</span>A refresh token is a long-lived token used
          to obtain a new access token when the current access token expires or
          becomes invalid. Refresh tokens are typically issued along with an
          access token during the authentication process. Unlike access tokens,
          refresh tokens are not sent with each request. Instead, they are
          securely stored on the client-side. When the access token expires, the
          client sends the refresh token to the server to obtain a new access
          token without requiring the user to reauthenticate.
        </p>
        <p>
          <span>Where to Store Tokens on the Client-side:</span> Access tokens
          are typically stored in memory (e.g., in a variable) or as an
          HTTP-only cookie. Storing the access token in memory is suitable for
          client-side frameworks like React, where you can store it in state or
          context. Storing the access token as an HTTP-only cookie provides
          additional security benefits as it helps mitigate cross-site scripting
          (XSS) attacks. Refresh tokens are long-lived and should be stored
          securely. Common practices include storing refresh tokens in an
          HTTP-only cookie, local storage, or secure browser storage (such as
          IndexedDB or Web Storage) with appropriate security measures. Storing
          refresh tokens as HTTP-only cookies provides better security since
          they are not accessible via JavaScript, reducing the risk of
          cross-site scripting attacks.
        </p>
      </div>
      <div className="my-3 border-4 rounded-xl p-3 borderstone-800">
        <h1>2. Compare SQL and NoSQL databases?</h1>
        <p>
          SQL databases follow a structured, tabular data model based on the
          relational model. They use SQL as the query language and enforce
          predefined schemas with fixed columns. SQL databases excel in handling
          structured data and support powerful operations like joins, filtering,
          aggregations, and transactions. They are well-suited for applications
          with complex relationships and ACID (Atomicity, Consistency,
          Isolation, Durability) compliance. NoSQL databases offer more
          flexibility in terms of data models, allowing for unstructured or
          semi-structured data. They use various data models like key-value,
          document, columnar, or graph. NoSQL databases often have their own
          query languages or APIs specific to each data model. They are designed
          for scalability, high performance, and handling large amounts of data.
          NoSQL databases are a good choice for applications with rapidly
          changing data structures, horizontal scalability needs, and eventual
          consistency requirements. However, they may sacrifice some
          functionalities like complex querying and transactions for the sake of
          scalability and flexibility.
        </p>
      </div>
      <div className="my-3 border-4 rounded-xl p-3 borderstone-800">
        <h1>3. What is express js? What is Nest JS?</h1>
        <p>
          <span>Express.js: </span>
          Express.js is a minimalist and unopinionated web application framework
          for Node.js. It provides a simple and flexible way to build web
          applications and APIs. Express.js focuses on being lightweight and
          allows developers to have fine-grained control over the applications
          structure and middleware. It provides a set of core features for
          routing, middleware handling, and request/response handling, but it
          leaves many architectural decisions and additional features up to the
          developers. Express.js is known for its simplicity, ease of use, and a
          large ecosystem of middleware and extensions.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Blog;
