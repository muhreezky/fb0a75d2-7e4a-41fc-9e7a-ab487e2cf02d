"use client";

import Image from "next/image";
import Swal from "sweetalert2";

type MyImageProps = {
  className?: string;
  onClick?: () => void;
  alt: string;
  src: string;
  width?: number;
  height?: number;
  sizes?: string;
}

export default function MyImage(props: MyImageProps) {
  return (
    <Image
      className={`${props.className} hover:cursor-pointer`}
      onClick={() => Swal.fire({ imageUrl: props.src, title: "Image Preview" })}
      alt={props.alt}
      src={props.src}
      width={props.width}
      height={props.height}
      sizes={props.sizes}
    />
  );
}
