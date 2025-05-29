import users from "./UsersData";

function UserDetails() {
    return (
        <div className="dummy-details">
            <h1>User Details</h1>
            <div>
                {users.map((item) => (
                    <div key={item.id} className="dummy-item">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.firstName} {item.lastName}</h2>
                        <p>Age: {item.age}</p>
                        <p>Gender: {item.gender}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserDetails;