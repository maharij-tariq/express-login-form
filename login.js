export default function login(){
    return ` <form  action="/submit" method="POST">
        <input type="text" name="username" placeholder="Enter your name">
        <input type="password" name="password" placeholder="Enter your password">
        <button>Submit</button>
        <a href = "/">Back To The Home Page</a>
    </form>`
}