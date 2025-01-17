// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory.jsx";
import Layout from "./../../Components/Layout/Layout.jsx";

// const Categories = () => {
//     const categories = useCategory();
//     return (
//       <Layout title={"All Categories"}>
//         <div className="container" style={{ marginTop: "100px" }}>
//           <div className="row container" >
//             {categories.map((c) => (
//               <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
//                 <div className="card">
//                   <Link to={`/category/${c.slug}`} className="btn cat-btn"style={{backgroundColor:"rgba(128, 128, 128, 0.097)"}}>
//                     {c.name}
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Layout>
//     );
//   };


const Categories = () => {
    const categories = useCategory();
    return (
      <Layout title={"All Categories"}>
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row container">
            {categories.map((c) => (
              <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                <div className="card">
                  <Link
                    to={`/category/${c.slug}`}
                    className="btn cat-btn"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "15px 25px", // Adjust height and width
                      fontSize: "18px", // Font size for better readability
                      borderRadius: "8px", // Rounded corners for a button-like look
                      backgroundColor: "rgba(128, 128, 128, 0.097)", // Light background color
                      color: "#333", // Text color
                      textDecoration: "none", // Remove underline
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow for depth
                      transition: "background-color 0.3s, box-shadow 0.3s", // Smooth hover effects
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(128, 128, 128, 0.2)"} // Hover effect
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(128, 128, 128, 0.097)"}
                  >
                    {c.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  };
  
export default Categories;