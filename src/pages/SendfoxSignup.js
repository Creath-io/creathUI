export default function SendfoxSignup() {
  return (
    <section className="sendfox--container">
      <form
        method="post"
        action="https://sendfox.com/form/m2r4wd/1wn97w"
        className="sendfox-form"
        id="1wn97w"
        data-async="true"
        data-recaptcha="false"
      >
        <p>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            required
          />
        </p>
        <p>
          <input type="email" placeholder="Email" name="email" required />
        </p>

        <p>
          <button type="submit">Sign Up</button>
        </p>
      </form>
      <script src="https://sendfox.com/js/form.js"></script>
    </section>
  );
}
