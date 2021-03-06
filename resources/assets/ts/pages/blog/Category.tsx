import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

import Layout from "@/includes/Layout";
import Seo from "@/includes/Seo";

import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import { PostType } from "@/utils/types";

const Category = () => {
  const { categories, posts, category } = usePage();
  const { data, links } = posts;

  return (
    <>
      <Seo
        title="Blog"
        description="Lisez quelques-uns des derniers articles liés au développement et à la conception Web."
      />
      <div className="bg-white py-6">
        <div className="container">
          <div className="w-full">
            <h1 className="text-brand-primary text-xl mb-3 font-semibold">Articles</h1>
            <p className="text-sm text-gray-600 lg:w-116">
              Lisez quelques-uns des derniers articles liés au développement et
              à la conception Web.
            </p>
          </div>
          <hr className="w-full bg-gray-200 mt-10 mb-6" />
          <div className="text-center overflow-hidden overflow-x-scroll hidden-scrollbar">
            <ul className="text-sm inline-flex">
              {
                categories.map((c: { id: number; name: string; slug: string }) => (
                  <li className="inline-block mr-6" key={c.id}>
                    <InertiaLink
                      href={`/blog/category/${c.slug}`}
                      className={`${c.id === category.id ? 'link font-medium' : 'text-gray-700 hover:text-gray-600'}`}
                    >
                      {c.name}
                    </InertiaLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-12 md:px-4">
        <div className="grid gap-6 max-w-lg mx-auto md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 xl:grid-cols-4 lg:max-w-none sm:mb-18">
          {data.map((post: PostType) => <Post key={post.id} post={post} />)}
        </div>
        <Pagination links={links} />
      </div>
    </>
  );
};

Category.layout = (page: React.ReactNode) => <Layout child={page} />;

export default Category;
