export const addBlog = ({img,title,desc})=>({
  type:"Create_Blog",
  blog:{
    id:crypto.randomUUID(),
    img,
    title,
    desc  
  }
})
