import { Link, useLocation } from "react-router";
import styled from "styled-components";

const routeNames = {
  materials: "Материалы",
  students: "Студенты",
  rating: "Рейтинг студентов",
};

const BreadcrumbNav = styled.nav`
  margin: 10px 0;
  font-size: 18px;
  text-transform: capitalize;
  text-decoration: none;
  text-decoration: none;
`;

const BreadcrumbItem = styled.span`
  color: ${(props) => (props.isLast ? "black" : "rgb(55, 114, 255)")}
  font-weight: ${(props) => (props.isLast ? "bold" : "normal")};
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(55, 114, 255);
`;

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <BreadcrumbNav>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            {isLast ? (
              <BreadcrumbItem isLast>
                {routeNames[value] || decodeURIComponent(value)}
              </BreadcrumbItem>
            ) : (
              <>
                <StyledLink to={to}>
                  {routeNames[value] || decodeURIComponent(value)}
                </StyledLink>
                {" > "}
              </>
            )}
          </span>
        );
      })}
    </BreadcrumbNav>
  );
};

export default Breadcrumbs;
