const ProfilePage = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Профиль</h1>
      <form action="/auth/sign-out" method="POST">
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Выйти
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
