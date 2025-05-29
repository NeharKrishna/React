import DummyData from "./DummyData";

function DummyDetails() {
    return (
        <div className="dummy-details">
            <h1>Dummy Data Details</h1>
            <div>
                {DummyData.map((item) => (
                    <div key={item.id} className="dummy-item">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>Category: {item.cuisine}</p>
                        <p>MealType: {item.mealType.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DummyDetails;