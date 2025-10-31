export default async function Contact() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return <div>Contact page</div>;
}
