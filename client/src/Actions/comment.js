export const addComment = async (responseTo, content) => {
    // the URL for the request
    const url = "http://localhost:3001/comment/d71aa007e47950b642ad40c625540b65/posts";

    // The data we are going to send in our request
    const newComment = {
        responseTo: responseTo,
        content: content
    }

    console.log(JSON.stringify(newComment))

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    await fetch(request)
        .then(function(res) {
            if (res.status === 200) {
                console.log(res.data)
                return res.data
            } //else {
                //throw("Could not add post")
            //}
        })
        .catch(error => {
            console.log(error);
        });
};
