import Image from "next/image";

function Home() {
  return (
    <>
      <h1>Olá mundo!</h1>
      <p>O Warley é um jovem careca!</p>

      <Image 
        src="/static/images/warley-careca.webp"
        alt="Warley careca"
        width={500}
        height={500}
      />
    </>
  )
}

export default Home;
