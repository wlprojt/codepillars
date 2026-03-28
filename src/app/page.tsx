import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="Next.js logo"
        width={2000}
        height={2000}
      />
    </div>
  );
}
