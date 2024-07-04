import { useEffect, useState } from "react"

function TestApi() {
  const [testApi, setTestApi] = useState(null)
  useEffect(() => {
    fetch(import.meta.env.VITE_TEST_API)
      .then((response) => response.json())
      .then(data => setTestApi(data.data))
  }, [])

  console.log(testApi)
  return (

    <div>

    </div>
  )




}

export default TestApi