import { forwardRef, useImperativeHandle, useRef } from "react"


const MyInput = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    hi: sayHi
  }))

  const sayHi = () => {
    alert("new value");
  }
  return (
    <>
      <input type="text" />
    </>
  )
})

const AppUseImperativeHandle = () => {
const inputRef = useRef<HTMLInputElement | null>(null);
const handleClick = ()=>{
  inputRef.current!.hi();
}
  return (
    <div>
      <MyInput ref={inputRef} /><button onClick={handleClick}>add</button>
    </div>
  )
}

export default AppUseImperativeHandle