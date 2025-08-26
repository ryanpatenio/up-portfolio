import React from "react";


type projects ={
    imgSrc: string;
    title: string;
    details: string;
    path: string;

};

type stacks ={
    imgSrc: string;
    name: string;
}

export function projectsData() {
    const data: projects[] = [
        {
            imgSrc: "https://images.pexels.com/photos/34140/pexels-photo.jpg?cs=srgb&dl=blogging-business-coding-34140.jpg&fm=jpg",
            title: "PayBuddy - Digital Wallet App",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit dolorum vero at quos inventore similique doloremque, cupiditate labore libero!",
            path: ""

        },
        {
            imgSrc: "https://miro.medium.com/max/3200/1*SNUFXbMYSOArQbA-Iwi-jA.png",
            title: "E-Commerce App",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit dolorum vero at quos inventore similique doloremque, cupiditate labore libero!",
            path: ""
        },
         {
            imgSrc: "https://uicookies.com/wp-content/uploads/2018/06/newspaper-free-magazine-website-templates.jpg",
            title: "Blog Post Web App",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit dolorum vero at quos inventore similique doloremque, cupiditate labore libero!",
            path: ""
        }
    ]
    return data;
}

export function techStacks(){
    const stack: stacks[] = [
        {
           imgSrc: "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
           name: "HTML" 
        },
        {
           imgSrc: "https://vectorified.com/images/css-icon-37.png",
           name: "CSS" 
        },
        {
           imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
           name: "JavaScript" 
        },
        {
           imgSrc: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png",
           name: "Tailwind CSS" 
        },
        {
           imgSrc: "https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png",
           name: "Bootstrap" 
        },
         {
           imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
           name: "React JS" 
        },
        {
           imgSrc: "https://cdn.icon-icons.com/icons2/2699/PNG/512/laravel_logo_icon_170314.png",
           name: "Laravel" 
        },

        {
           imgSrc: "https://cdn1.iconfinder.com/data/icons/logos-3/304/codeigniter-icon-1024.png",
           name: "Codeigniter" 
        },
         {
           imgSrc: "http://pluspng.com/img-png/jquery-logo-png--800.gif",
           name: "JQuery" 
        },
         {
           imgSrc: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/node_js_logo-1024.png",
           name: "Node JS" 
        },
        {
           imgSrc: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3244252/nextjs-icon-md.png",
           name: "Next JS" 
        },
        {
           imgSrc: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mysql-icon.png",
           name: "Mysql" 
        },
        {
           imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
           name: "TypeScript" 
        },
        {
           imgSrc: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
           name: "GitHub" 
        },


    ]
     return stack;
}