import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Bottombar from '../bars/Bottombar'
import { GetByCategory, GetPopularPosts } from '../Redux/Posts/PostSlice'
import PostCard from './PostCard'

function GetPostsByCategory() {
    const posts = useSelector(state => state.posts.category)
    const { category } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetByCategory(category))
        document.title = "Studblog | " + category
    }, [dispatch])
    return (
        <>
            <div id='home-page' >
                <div id="posts" >
                    {posts.map((post => (
                        <div key={post.ID}>
                            <PostCard
                                title={post.title}
                                authorpp={post.sender.image.url}
                                imgurl={post.image.url}
                                authorname={post.sender.name}
                                postId={post.ID}
                            />
                        </div>
                    )))}
                </div>
            </div>
            <Bottombar />
        </>
    )
}

export default GetPostsByCategory