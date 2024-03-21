const User = ({ user }) => {
  const { name, email } = user;
  return (
    <div>
      <h3>Name: {name}</h3>
      <h4>Email:{email}</h4>
    </div>
  );
};

export default User;
