import Anchor from "./Anchor";

export default function Layout({ children, navData }) {
  console.log(navData);
  return (
    <>
      <nav>
        {navData.map(dog => {
          return <Anchor href={"/dogs/" + dog.slug}>{dog.title}</Anchor>;
        })}
      </nav>
      {children}
      <footer>Footer</footer>
    </>
  );
}
