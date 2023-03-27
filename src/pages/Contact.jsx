import { useLoaderData } from "react-router-dom";
function Contact() {
  return <div>{useLoaderData()}</div>;
}

export default Contact;
