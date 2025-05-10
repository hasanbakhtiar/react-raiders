import {  useLayoutEffect, useState } from "react"

const AppUseLayoutEffect: React.FC = () => {
    const [data, setData] = useState<string>("Hello");
    useLayoutEffect(() => {
        setData("Bye")
    }, [])
    return (
        <div>
            {data}
        </div>
    )
}

export default AppUseLayoutEffect