export default async function Contact() {
  console.log("Is this a server of client component");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return <div>Contact page</div>;
}
