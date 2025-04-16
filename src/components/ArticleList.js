import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articleComponents=posts.map((post)=>(
        <div key={post.id}>
        <Article title={post.title} date={post.date} preview={post.preview}/>
        </div>
    ))
    return (
        <main>
        {articleComponents}
        </main>
    )

}
export default ArticleList