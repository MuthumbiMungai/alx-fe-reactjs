// src/components/UserProfile.jsx
const UserProfile = (props) => {
  return (
    <div className="user-profile" style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", margin: "1rem 0" }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
