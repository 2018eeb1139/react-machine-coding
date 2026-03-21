import { useLocation, Link } from "react-router-dom";
export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const pathNames = pathname.split("/").filter((x) => x);
  console.log(pathNames);
  let path = "";
  return (
    <div className="breadcrumbs">
      {pathNames.length > 0 && <Link to="/">Home</Link>}
      {pathNames.map((p, idx) => {
        const isLast = idx === pathNames.length - 1;
        path += `/${p}`;
        return isLast ? (
          <span>
            {" > "}
            {p}
          </span>
        ) : (
          <span>
            <Link to={path}>
              {" > "}
              {p}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
