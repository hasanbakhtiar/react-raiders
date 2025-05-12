import axios from "axios";
import { createContext, useEffect, useState } from "react"


export interface commentType {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

interface contextType {
    mycomment: commentType[] | undefined;
}

export const DataContext = createContext<contextType | null>(null);

export const DataProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [comments, setComment] = useState<commentType[]>();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setComment(res.data))
    }, [])
    const mydata = {
        mycomment: comments
    }
    return <DataContext.Provider value={mydata}>{children}</DataContext.Provider>
}
