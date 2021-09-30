import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

export default function blog() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        nodes {
          name
        }
      }
    }
  `);

  return (
    <Layout>
      <p>My cool posts will go in here</p>
    </Layout>
  );
}
