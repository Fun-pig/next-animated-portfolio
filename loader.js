"use client";

export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith("https://images.pexels.com/")) {
    return src;
  }
  return `http://127.0.0.1:13000/${src}?w=${width}&q=${quality || 75}`;
}
