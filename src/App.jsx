import { useState, useEffect } from 'react'

function App() {
  const [isNumberRequired, setIsNumberRequired] = useState(false);
  const [isSpecialCharRequired, setIsSpecialCharRequired] = useState(false);
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("PaSsWoRd");

  const handleLength = (event) => {
    setLength(event.target.value)
  }

  const handleNumberSelect = (event) => {
    // console.log("handleNumberSelect", event.target.checked);
    setIsNumberRequired(event.target.checked);
    // generatePassword();
  }

  const handleSpecialCharSelect = (event) => {
    // console.log("handleSpecialCharSelect", event.target.checked);
    setIsSpecialCharRequired(event.target.checked);
    // generatePassword();
  }
  
  // useEffect(() => {
  //   setLength(8);
  // }, [])

  useEffect(() => {
    generatePassword();
  }, [length, isNumberRequired, isSpecialCharRequired]);

  const generatePassword = () => {
    let randomPassword = "";
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumberRequired) {
      char += "0123456789";
    }

    if (isSpecialCharRequired) {
      char += "!@#$%&";
    }

    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * char.length + 1);
      randomPassword += char.charAt(randomNumber);
    }

    setPassword(randomPassword);
  }

  return (
    <>
      <div className='h-screen flex bg-blue-300 items-center'>
        <div className='h-auto w-auto mx-auto bg-blue-950 rounded-lg'>
          <h1 className='text-white font-bold text-lg text-center p-10 underline italic'>Password Generator</h1>
          <div className='flex items-center p-20 pt-0 pb-5 gap-2'>
            <input type="checkbox" id="number" className='h-4 w-4' onChange={() => { setIsNumberRequired((prev) => !prev) }} />
            <label for='number' className='text-white text-lg'>Number</label>
            <span className='w-20'></span>
            <input type="checkbox" id="special" className='h-4 w-4' onChange={(e) => { handleSpecialCharSelect(e) }} />
            <label for='special' className='text-white text-lg'>Special Characters</label>
          </div>
          <div className='flex items-center p-20 pt-0 pb-5 gap-2'>
            <label for='length' className='text-white text-lg'>Length</label>
            <input type="range" id="length" value={length} min={8} max={15} onChange={(e) => { handleLength(e) }} />
            <span className='text-white'>{length} Characters</span>
          </div>
          <div className='flex p-20 pt-5 pb-5'>
            <input type="text" className='h-10 w-full rounded pl-2' readOnly value={password} />
          </div>
          <div className='flex p-20 pt-5 pb-10'>
            <button className='rounded p-2 bg-orange-500 text-blue-950 font-bold mx-auto'
              onClick={generatePassword}>Generate</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
