

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;