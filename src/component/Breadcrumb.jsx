import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  let breadcrumbPath = "";
  return (
    <div className="breadcrumb">
      {pathnames.length > 0 && (
        <span>
          <Link to="/"> Home </Link>
        </span>
      )}
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={breadcrumbPath}>/ {name} </span>
        ) : (
          <span key={breadcrumbPath}>
            / <Link to={breadcrumbPath}> {name} </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
