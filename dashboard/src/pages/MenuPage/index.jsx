import React from "react";
import { getUserDetails } from "../../utils/api";

export function MenuPage({ history }) {
  const [user, setuser] = React.useState(null);
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    getUserDetails()
      .then((data) => {
        setuser(data);
        setloading(false);
      })
      .catch((err) => {
        history.push("/");
        setloading(false);
      });
  }, []);

  return (
    !loading && (
      <div>
        <header>Menu Page</header>
      </div>
    )
  );
}
