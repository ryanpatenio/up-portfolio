import React from "react";

type Tab = {
  id: string;
  label: string;
  icon: React.ReactElement;
};

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

export function portfolioTabs(){
     const tabs: Tab[] = [
            { 
                id: "projects", label: "Projects",
                icon: (
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-code-slash text-gray-400" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                    </svg>
                ),
             },
            { 
                id: "techStacks", label: "Tech Stacks",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-boxes text-gray-400" viewBox="0 0 16 16">
                        <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                    </svg>
                ),
            },
        ];
    return tabs;
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

//  id: "paybuddy",
//     title: "PayBuddy - Digital Wallet App",
//     details: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
//     images: [
//       "/projects/paybuddy/1.jpg",
//       "/projects/paybuddy/2.jpg"
//     ]