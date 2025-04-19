export const addBlog = ({ img, title, desc }) => ({
  type: 'Create_Blog',
  blog: {
    id: crypto.randomUUID(),
    img,
    title,
    desc,
  },
});

export const deleteBlog = (id) => ({
  type: 'Remove_Blog',
  id,
});

export const editBlog = ({ id, editdata }) => ({
  type: 'Update_Blog',
  id,
  editdata,
});
