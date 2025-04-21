import supabase from "../../utils/supabase";



export const getBlog = (blogs)=>({
  type:"GET_BLOG",
  blogs
})




export const addBlog = async ({ img, title, desc }) => {
  const { error } = await supabase
    .from("react-raiders")
    .insert({ img:img,title:title,desc:desc });
    if (error) {
      console.log(error);
    }else{
      console.log('Blog added successfully!');
      window.location.assign('/dashboard');
    }
};

export const deleteBlog = async (id) => {
  const response = await supabase
  .from('react-raiders')
  .delete()
  .eq('id', id);
  if (response) {
    console.log("Blog deleted successfully!");
    window.location.reload();
  }else{
    console.log("Something went wrong!");
  }
};

export const editBlog = async(id, editdata ) => {
  const { error } = await supabase
  .from('react-raiders')
  .update(editdata)
  .eq('id', id);
  if (error) {
    console.log(error);
  }else{
    console.log('Blog updated successfully!');
    window.location.assign('/dashboard');
  }
};

