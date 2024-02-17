import posts from "./data.js";

function renderPosts(arr){
    return arr.map(function(item){
        const{name,username,location,avatar,post,comment,likes} = item;
    
           return  `<div class="post-user-details">
                        <img class="post-profile-picture" src=${item.avatar} alt="user profile picture">
                        <div class="post-name-location">
                            <h3 class="post-name">${item.name}</h3>
                            <h4 class="post-location">${item.location}</h4>
                        </div>
                    </div>
                    <img class="post-image" src=${item.post} alt="post image">
                    <div class="post-bottom-section">
                        <span class="icon-span">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-comment"></i>
                            <i class="fa-regular fa-paper-plane"></i>
                        </span>
                        <h4 class="post-likes">${item.likes} likes</h4>
                        <div class="post-username-comment">
                            <h3 class="post-username">${item.username}</h3>
                            <h3 class="post-comment">${item.comment}</h3>
                        </div>
                    </div> 
                    `
    }).join("");             
    
};

document.getElementById('post-section').innerHTML = renderPosts(posts);