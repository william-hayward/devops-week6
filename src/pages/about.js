import Head from "next/head";

export default function about() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> About </h1>
      <p> 
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum atque
        doloremque molestiae cum quibusdam corporis aspernatur expedita repellat
        facere unde provident dolore laborum sapiente, necessitatibus itaque
        quidem dicta commodi. Sunt.
      </p>
    </div>
  );
}
