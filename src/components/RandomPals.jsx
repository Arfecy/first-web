import { useEffect, useState } from "react"




function RandomPals() {
  const [pals, setPals] = useState(null)
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then(data => setPals(data.data))

  }, [])

  return (
    <div style={{ display: "flex" }}>
      {pals?.map((obj, index) => {
        return (
          <div key={obj.id} style={{ width: "20%" }}>
            {obj.attributes.name}
            {obj.attributes.number}
            <img src={obj.attributes.model.data.attributes.url} style={{ width: "auto", height: "200px" }}></img>
          </div>
        )
      })}
    </div>
  )
}

export default RandomPals