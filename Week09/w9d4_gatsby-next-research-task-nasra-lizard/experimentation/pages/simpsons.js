import Image from 'next/image';

function SimpsonsPage(props) {
  console.log(props);
  const { image, quote, character } = props.data[0];
  return (
    <>
      <h1>The Simpsons</h1>
      <p>{quote}</p>
      <Image
        src={image}
        alt={character}
        width="300"
        height="500"
        layout="intrinsic"
      />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes
    `);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default SimpsonsPage;
