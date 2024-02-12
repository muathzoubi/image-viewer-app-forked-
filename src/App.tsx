import { useState } from "react";
import Layout from "./Layout";
import StarterPage from "./components/starter";
import "./styles.css";
import { Theme } from "@radix-ui/themes";

export default function App() {
  const [start, setStart] = useState(false);
  return (
    <html>
      <body>
        <Theme style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
          {start ? (
            <Layout strart={start} />
          ) : (
            <StarterPage setStart={setStart} />
          )}
        </Theme>
      </body>
    </html>
  );
}
