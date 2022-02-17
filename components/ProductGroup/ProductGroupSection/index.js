import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import getProducts from "../../../pages/api/products";
import SingleProduct from "./SingleProduct";

import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductGroupSection() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  /*  */
  const [activeTab, setActiveTab] = useState();
  useEffect(() => {
    const categories = [...new Set(products.map((i) => i.category))];
    setCategories(categories);
    console.log(categories);
  }, [products]);

  /* 
  const [categoryTab, setCategoryTab] = useState([
    {
      groupName: "Android Phones",
      active: true,
      groupId: 1,
    },
    {
      groupName: "IOS Phones",
      active: false,
      groupId: 2,
    },
    {
      groupName: "Tablets",
      active: false,
      groupId: 3,
    },
    {
      groupName: "Accesorries",
      active: false,
      groupId: 4,
    },
  ]);
 */
  // Example Fetch API
  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  };

  // Render on load
  useEffect(() => {
    fetchProducts();
    // filtereProductsFunction("Android Phones");
  }, []);

  //*****  Toggle Active Tab Function
  // const toggleActive = (tabName) => {
  //   let newCategoryTab = [];
  //   categoryTab.map((tab) => {
  //     if (tab.groupName === tabName) {
  //       tab = { ...tab, active: true };
  //       newCategoryTab.push(tab);
  //     } else {
  //       tab = { ...tab, active: false };

  //       newCategoryTab.push(tab);
  //     }
  //   });
  //   /* setCategoryTab(newCategoryTab); */
  // };

  //***** Filter Items
  /*   const filtereProductsFunction = (tabName) => {
    // logic here
    toggleActive(tabName);
    const filterProducts = products.filter((product) => {
      return product.category === tabName;
    });
    setFilteredProducts(filterProducts);
  };
 */
  // ******** Slider settings

  let settings = {
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section-hot-new-arrivals section-products-carousel-tabs techmarket-tabs">
        <div className="section-products-carousel-tabs-wrap">
          <header className="section-header">
            <h2 className="section-title">Cell Phones &amp; Tablets</h2>
            <ul role="tablist" className="nav justify-content-end">
              {categories.map((item) => {
                return (
                  <>
                    <li
                      /*  onClick={() => filtereProductsFunction(item.groupName)} */
                      className="nav-item"
                    >
                      {console.log(item)}
                      <Link href={`#${categories.indexOf(item)}`}>
                        <a
                          className={
                            router.pathname == `#p${categories.indexOf(item)}`
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          {item}
                        </a>
                      </Link>
                      {/* <a
                        className={`nav-link ${
                          item.active === true && "active"
                        }`}
                        href={`/#prouduct-group-${item}`}
                        data-toggle="tab"
                      >
                        {item}
                      </a> */}
                    </li>
                  </>
                );
              })}
            </ul>
          </header>
          {/* <!-- .section-header --> */}
          {/******** Slider  Section ********/}
          <div className="products-carousel">
            <div className="container-fluid">
              <div className="woocommerce ">
                {/******** Slider ********/}
                {/* <Slider {...settings} className="products">
                  {products
                    .filter((p) => p.category === activeTab)
                    .map((product) => {
                      return (
                        <SingleProduct
                          key={product._id}
                          category={product.category}
                        />
                      );
                    })}
                </Slider> */}
              </div>
            </div>
          </div>
          {/*  <!-- .tab-content --> */}
        </div>
        {/* <!-- .section-products-carousel-tabs-wrap --> */}
      </section>
    </>
  );
}
