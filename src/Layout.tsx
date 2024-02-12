import { Flex, Text } from "@radix-ui/themes";
import MainViewer from "./components/mainviewer";
import Thumbnails from "./components/thumbnails";
import "./styles.css";
import "@radix-ui/themes/styles.css";
import { useEffect, useState } from "react";
const imageList: string[] = [
  "https://source.unsplash.com/O0uCm1WLnA0/800x800",
  "https://source.unsplash.com/pV5ckb2HEVk/800x800",
  "https://source.unsplash.com/j9QEFAQqaXc/800x800",
  "https://source.unsplash.com/EXkbaeN05lY/800x800",
  "https://source.unsplash.com/B2mq60Ksrsg/800x800",
  "https://source.unsplash.com/9O0uXkDnqR0/800x800",
];
const Layout = (props: any) => {
  const [images, setImages] = useState(imageList);
  const [opasity, setOpasity] = useState(0);
  const [imgsrc, setImg] = useState(
    "https://source.unsplash.com/ufFIweqSPd4/800x800",
  );
  useEffect(() => {
    setImages(imageList);
    setOpasity(1);
  }, []);
  return (
    <Flex
      className="App"
      direction="column"
      style={{ opacity: opasity, transition: "opacity 2.5s" }}
    >
      <MainViewer img={imgsrc} />
      <Thumbnails images={images} setImg={setImg} />
    </Flex>
  );
};
export default Layout;
