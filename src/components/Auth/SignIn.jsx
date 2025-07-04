export const SignIn = () => {
  const SignIn = (data) => {
    let password = data.get("password");
    let email = data.get("email");
    console.log("Sign it in!", { password, email });
  };
  return (
    <>
      <h1>Sign In</h1>
      <form action={SignIn}>
        <input id="email" name="email" type="email" placeholder="a@b.com" />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="AGoodPassPhrase"
        />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};
