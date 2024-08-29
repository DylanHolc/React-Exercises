function choice(arr) {
    let answerIndex = Math.floor(Math.random() * arr.length);
    return arr[answerIndex];
}

export { choice };