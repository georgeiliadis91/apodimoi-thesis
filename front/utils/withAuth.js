// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { cookieStorage } from "./cookieStorage";
import axios from "axios";

export const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const fetchAndVerify = async () => {
        const jwtToken = cookieStorage.get("jwtToken");

        // TODO check the flow later something fishy might be going on
        if (!jwtToken) {
          Router.replace("/");
        } else {
          axios
            .get(process.env.NEXT_PUBLIC_API_URL + "/users/me", {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            })
            .then((response) => {
              if (response) {
                setVerified(true);
              } else {
                cookieStorage.remove("jwtToken");
                Router.push("/login");
              }
            })
            .catch((error) => {
              // Handle error.
              console.log("An error occurred:", error);
            });
        }
      };

      fetchAndVerify();
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};
