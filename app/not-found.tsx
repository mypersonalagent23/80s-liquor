import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <div className="wrap missing">
      <h1 className="display">That page isn’t on this site.</h1>
      <p>
        {site.name} is at {site.street}, {site.city}.
      </p>
      <p>
        <Link className="btn btn-line" href="/">
          Back to the front page
        </Link>
      </p>
    </div>
  );
}
