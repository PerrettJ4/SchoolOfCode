import { useState, useEffect } from "react";

// ipmort useState and useEffect
// pass in fetchURL
// copy functionality and return thing

function useFetch(API_URL, id = null) {
  const [thing, setThing] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setThing(data))
      .catch((err) => setError(err));
  }, [id]);

  return [thing, error, setThing];
}

export default useFetch;
