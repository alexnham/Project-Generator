import { useState } from "react";

const Terminal = () => {
    const [idea, setIdea] = useState(null)
    const [loading, setLoading] = useState(true)
    const [difficulty, setDifficulty] = useState("Easy")


    const createIdea = async () => {
        setIdea(null)
        setLoading(false)
        console.log(difficulty)

        const response = await fetch(`/GPT/${difficulty}`, 
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            })
            const json = await response.json()

                try {
                setIdea(JSON.parse(json))
                setLoading(true)
                setDifficulty("Easy")
        
                } catch(e){
                    setLoading(false)
                    setIdea(e)
                }
            
    }

    return ( 
        <div className="p-10 relative w-5/6 h-5/6 bg-neutral-900 rounded-3xl  border-neutral-900 border-t-8 text-white">
            {!loading && <div>Loading...</div>}
            {idea && 
            
            <div>
            <p className="p-4">Idea: {idea.project}</p>
            <p className="p-4">Difficulty: {idea.difficulty}</p>
            <p className="p-4">{idea.description}</p>
            <span className="p-4">Languages: </span>
            {idea.languages?.map((language) => (
                <span className="p-4">{language}</span>))}  
            <br/>
            <span className="p-4">Frameworks: </span> 
            {idea.frameworks?.map((framework) => (
                <span className="p-4">{framework}</span>                
            ))} 
            <br/>
            <span className="p-4">Features: </span>
            {idea.features?.map((feature) => (
                    <span className="p-4">{feature}</span> ))}
            </div>}
            {loading && 
                <div>
                <select className="absolute  bg-neutral-900 text-3xl bottom-0 pl-96 w-4/4"  onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <button type="submit" className="absolute bottom-0 text-4xl " onClick={() => createIdea()}>Generate New Project Idea</button>
                 </div>
            
            }
        </div>
     );
    
}
 
export default Terminal;