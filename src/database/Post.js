const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const {isNumber} = require('../regex/regex.js')

const getAllPost = async () =>  {
    try {
        const allPost = await prisma.post.findMany()
        return allPost
    } 
    catch(err) 
    {
        console.log(err)
    }
}

const createNewPost = async (newPost)=>{
    try
    {

    const added = await prisma.post.create({
        data: newPost
    })

    return added

    }catch(err)
    {
        console.log(err)
    }
}

const updatePost = async (idPost, newData) => {
    try
    {
        const updatedPost = await prisma.post.update(
            {
                where: {
                    id : idPost
                },
                data: newData
            })

        return updatedPost
    }
    catch(err)
    {
        console.log(err)
    }
}

const deletePost = async (idPost) => {
    try
    {
        const deletedPost = await prisma.post.delete({
            where: {
                id: idPost
            },
        })
        
        return deletedPost

    }catch(err)
    {
        console.log(err)
    }
}






module.exports={
    getAllPost,
    createNewPost,
    updatePost,
    deletePost
}