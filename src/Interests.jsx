function Interests() {
    const hobbies = ["Powerlifting", "Soccer", "Gaming"]

    return(
        <section>
            <h2> My Interests </h2>
            <ul>
                {hobbies.map((hobby) => (
                    <li key = {hobby}> {hobby} </li>
                ))}
            </ul>
        </section>
    )
}

export default Interests