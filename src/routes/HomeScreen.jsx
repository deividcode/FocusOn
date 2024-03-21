import { useState } from "react"

export const HomeScreen = () => {

  const [description, setDescription] = useState("")

  const handleChange = (e) => { 
    e.preventDefault()

    let newValue = e.target.value;   

    setDescription(newValue)
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log(description)
    setDescription("")
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>        
        <div class="mt-2">
          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">              
            <input 
              type="text" 
              name="createTask" 
              id="createTask" 
              value={description} 
              onChange={handleChange} 
              placeholder="Create Task" 
              class="block flex-1 border-0 bg-transparent py-2 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
          </div>
        </div>

      </form>
    </div>
  )
}
