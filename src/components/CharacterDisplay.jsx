import CharacterCard from "./CharacterCard"

function CharacterDisplay() {
    return <section className="border">
        <h2>Characters</h2>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
    </section>
}

export default CharacterDisplay