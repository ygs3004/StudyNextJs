const names = ["Yoon", "Gun"];

function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return <div>
        <p>ChosenName: {chosenName}</p>
        <p>React.js is Awesome</p>
    </div>
}

export default Post;