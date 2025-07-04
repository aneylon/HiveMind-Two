export const SignUp = () => {
  const SignUp = (data) => {
    let password = data.get("password");
    let email = data.get("email");
    console.log("Sign it up!", { password, email });
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form action={SignUp}>
        <input id="email" name="email" type="email" placeholder="a@b.com" />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="AGoodPassPhrase"
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
