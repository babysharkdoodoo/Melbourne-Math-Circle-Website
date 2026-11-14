import { permanentRedirect } from "next/navigation";

export default function Page() {
  permanentRedirect("/some-math#math-bites");
}
