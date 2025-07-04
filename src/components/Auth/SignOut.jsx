export const SignOut = () => {
  const SignOut = () => {
    console.log("Sign out");
  };
  return (
    <>
      <button
        onClick={() => {
          SignOut();
        }}
      >
        Sign Out
      </button>
    </>
  );
};
