import Head from "next/head";
import Image from "next/image";

export default function Dogs({ data }) {
  const { content } = data;
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{content.heading}</h1>
      <p>{content.text}</p>

      {/* We use the image component to optimise it automatically instead of having to do it ourselves */}
      <Image
        src={content.image.src}
        alt={content.image.alt}
        width={content.image.width}
        height={content.image.height}
        sizes="(max-width: 750px)100vw, 750px"
      />
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context.params.slug);
  const slug = context.params.slug;
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug;
  const res = await fetch(api);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}

/* Doing static makes sure it's prerendered and only generated once */
export async function getStaticPaths() {
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs";
  const res = await fetch(api);
  const data = await res.json();

  const paths = data.map(object => {
    console.log(object);
    return { params: { slug: object.slug } };
  });
  console.log(data);
  return {
    paths,
    fallback: false,
  };
}
