import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SingleWork() {
  const router = useRouter();
  const [work, setWork] = useState("");

  useEffect(() => {
    let work = router.query.work;
    setWork(work);
    console.log(work);
  }, []);
  return (
    <div>
      <h1>{work}</h1>
    </div>
  );
}

export default SingleWork;
