import Image from "next/image";

function WarleyCareca() {
  return (
    <>
      <p>O Warley é um jovem careca!</p>

      <Image
        src="/static/images/warley-careca.webp"
        alt="Warley careca"
        width={500}
        height={500}
      />
    </>
  );
}

export default WarleyCareca;
