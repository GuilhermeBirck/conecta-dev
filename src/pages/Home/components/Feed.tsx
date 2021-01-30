import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import PostCard from '../../../components/PostCard/';

 
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginRight: theme.spacing(10)
        }
    },
));

const posts  = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Lucas Nhimi',
            username: 'lucasnhimi',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Criando um App do zero utilizando React.js",
        date: "April 7, 2020",
        description: 'Fala pessoal! Qual o framework favorito de vocês?',
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "/images/posts/post9.jpeg"
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Lucas Nhimi',
            username: 'lucasnhimi',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Comparativo entre React.js e Vue.js - Performance",
        date: "April 1, 2020",
        description: 'Fala pessoal! Qual o framework favorito de vocês?',
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "/images/posts/post9.jpeg"
      
    }
];

function Feed() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    )
}

export default Feed;